// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// Advanced Interactivity & SEO Optimization
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initAnimationFramework();
    initNavigation();
    initPortfolioFilter();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
    initTypingAnimation();
    initYouTubePlayers();
    initYouTubeShowcase();
    initInstaFeed();
    trackConversions();
});

// ============================================
// ANIMATION FRAMEWORK - Data Attribute Based
// ============================================

function initAnimationFramework() {
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-animation');
                const delay = parseFloat(element.getAttribute('data-delay')) || 0;
                
                setTimeout(() => {
                    element.classList.add('animated', animation);
                    observer.unobserve(element);
                }, delay * 1000);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// TYPING ANIMATION FOR HERO TAGLINE
// ============================================

function initTypingAnimation() {
    const tagline = document.querySelector('.hero-tagline');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            tagline.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start animation after a short delay
    setTimeout(type, 500);
}

// ============================================
// NAVIGATION TOGGLE
// ============================================

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
            
            // Track event
            trackEvent('menu_opened', 'engagement');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            hamburger?.setAttribute('aria-expanded', 'false');
            
            // Track navigation clicks
            const sectionId = this.getAttribute('href');
            trackEvent('navigation_click', 'engagement', { section: sectionId });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = document.querySelector('.nav-container')?.contains(event.target);
        if (!isClickInsideNav && navMenu?.classList.contains('active')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            hamburger?.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// PORTFOLIO FILTERING
// ============================================

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter items with animation
            portfolioItems.forEach(item => {
                item.style.transition = 'opacity 0.3s ease';
                
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.offsetHeight; // Trigger reflow
                    item.style.opacity = '1';
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });

            // Track filter usage
            trackEvent('portfolio_filter', 'engagement', { filter: filterValue });
        });
    });
}

// ============================================
// CONTACT FORM HANDLING & FORMSPREE INTEGRATION
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const opportunity = document.getElementById('opportunity').value;
            const budget = document.getElementById('budget').value;
            const timeline = document.getElementById('timeline').value;
            const message = document.getElementById('message').value.trim();
            const submitButton = form.querySelector('button[type="submit"]');

            if (!name || !email || !opportunity || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            showFormMessage('Sending your inquiry...', 'success');

            trackEvent('form_submitted', 'conversion', {
                opportunity_type: opportunity,
                budget_range: budget || 'not_specified'
            });

            try {
                const payload = new FormData(form);
                payload.set('_replyto', email);

                const response = await fetch(form.action, {
                    method: form.method,
                    body: payload,
                    headers: { 'Accept': 'application/json' }
                });

                if (!response.ok) {
                    throw new Error('Form submission failed');
                }

                showFormMessage('Thank you. Your inquiry has been sent and I will reply within 24 hours.', 'success');
                form.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Something went wrong. Please email me directly at magicali.hands@gmail.com.', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Inquiry';
            }
        });
    }

    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove('success', 'error');
        formMessage.classList.add(type);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// ============================================
// YOUTUBE DATA API PLAYLIST LOADER
// ============================================

function initYouTubePlayers() {
    const players = document.querySelectorAll('.youtube-player');
    const canSetOrigin = window.location.protocol === 'http:' || window.location.protocol === 'https:';

    players.forEach(player => {
        if (!canSetOrigin) return;

        const url = new URL(player.src);
        url.searchParams.set('origin', window.location.origin);
        player.src = url.toString();
    });
}

async function initYouTubeShowcase() {
    const section = document.getElementById('youtube');
    const grid = document.getElementById('youtubeGrid');
    const status = document.getElementById('youtubeStatus');

    if (!section || !grid || !status) return;

    const apiKey = section.dataset.youtubeApiKey?.trim();
    const playlistId = section.dataset.youtubePlaylistId?.trim();
    const manualVideoIds = (section.dataset.youtubeVideoIds || '')
        .split(',')
        .map(id => id.trim())
        .filter(Boolean);
    const maxResults = section.dataset.youtubeMaxResults || '6';

    if (window.location.protocol === 'file:') {
        renderManualYouTubeVideos(grid, status, manualVideoIds);
        return;
    }

    if (!apiKey || !playlistId) {
        renderManualYouTubeVideos(grid, status, manualVideoIds);
        return;
    }

    status.textContent = 'Loading latest YouTube videos...';

    try {
        const params = new URLSearchParams({
            part: 'snippet',
            playlistId: playlistId,
            maxResults: maxResults,
            key: apiKey
        });

        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${params}`);

        if (!response.ok) {
            throw new Error('YouTube API request failed');
        }

        const data = await response.json();
        const videos = (data.items || [])
            .map(item => item.snippet)
            .filter(snippet => snippet?.resourceId?.videoId);

        if (!videos.length) {
            status.textContent = 'No videos were found for this playlist yet.';
            return;
        }

        grid.innerHTML = videos.map(video => {
            const videoId = video.resourceId.videoId;
            const title = escapeHtml(video.title);
            const description = escapeHtml((video.description || '').split('\n')[0]).slice(0, 130);

            return `
                <article class="youtube-card">
                    <a class="youtube-thumb" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener" aria-label="Watch ${title} on YouTube">
                        <img src="${video.thumbnails?.high?.url || video.thumbnails?.medium?.url || video.thumbnails?.default?.url}" alt="${title}" loading="lazy">
                        <span><i class="fab fa-youtube" aria-hidden="true"></i></span>
                    </a>
                    <div class="youtube-card-content">
                        <h3>${title}</h3>
                        <p>${description || 'Watch this selected video on YouTube.'}</p>
                    </div>
                </article>
            `;
        }).join('');

        status.textContent = 'Loaded from YouTube.';
        trackEvent('youtube_playlist_loaded', 'integration', { playlist_id: playlistId });
    } catch (error) {
        console.error('YouTube integration error:', error);
        renderManualYouTubeVideos(grid, status, manualVideoIds);
        status.textContent = 'Showing selected videos. Auto-sync needs YouTube Data API access enabled for this key.';
    }
}

function renderManualYouTubeVideos(grid, status, videoIds) {
    if (!videoIds.length) {
        status.textContent = 'Showing selected YouTube videos.';
        return;
    }

    grid.innerHTML = videoIds.map((videoId, index) => {
        const title = index === 0 ? 'Showreel Preview' : `Selected Video ${index + 1}`;

        return `
            <article class="youtube-card">
                <a class="youtube-thumb" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener" aria-label="Watch ${title} on YouTube">
                    <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="${title}" loading="lazy">
                    <span><i class="fab fa-youtube" aria-hidden="true"></i></span>
                </a>
                <div class="youtube-card-content">
                    <h3>${title}</h3>
                    <p>Open this selected video directly on YouTube.</p>
                </div>
            </article>
        `;
    }).join('');

    status.textContent = 'Showing selected YouTube videos.';
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                return;
            }

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const offset = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS & EFFECTS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe various elements
    const elementsToObserve = [
        '.stat-card',
        '.skill-card',
        '.credit-card',
        '.portfolio-item',
        '.testimonial-card',
        '.blog-card'
    ];

    elementsToObserve.forEach(selector => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.style.opacity = '0';
            element.style.animationDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    }, { passive: true });
}

// ============================================
// INSTAGRAM FEED SIMULATION
// ============================================

function initInstaFeed() {
    // Placeholder for Instagram Feed integration
    // In production, use:
    // 1. Instagram Graph API (requires approval)
    // 2. Third-party embed solutions (EmbedSocial, Instawidget, etc.)
    // 3. Manual feed updates with image uploads

    const instaItems = document.querySelectorAll('.insta-item');
    
    instaItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// ============================================
// CONVERSION TRACKING & ANALYTICS
// ============================================

function trackEvent(eventName, eventCategory, eventData = {}) {
    // Google Analytics 4 (GA4)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': eventCategory,
            ...eventData
        });
    }

    // Meta Pixel (Facebook)
    if (typeof fbq !== 'undefined') {
        fbq('trackEvent', eventName, eventData);
    }

    console.log(`Event tracked: ${eventName}`, { category: eventCategory, data: eventData });
}

function trackConversions() {
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .fab-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent || this.getAttribute('title') || 'CTA';
            trackEvent('cta_clicked', 'engagement', { button_text: text });
        });
    });

    // Track external link clicks (for brand partnerships, social media)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            trackEvent('external_link_clicked', 'engagement', { url: href });
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value || '';
    return div.innerHTML;
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu?.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// PAGE LOAD OPTIMIZATION
// ============================================

// Preload critical images
window.addEventListener('load', function() {
    const headshot = document.querySelector('.headshot-image');
    if (headshot && headshot.complete) {
        // Image loaded successfully
        console.log('Headshot image loaded');
    }
});

// ============================================
// SERVICE WORKER FOR OFFLINE SUPPORT (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable offline support
    // navigator.serviceWorker.register('/service-worker.js');
}

console.log('Portfolio website initialized successfully.');
console.log('Tip: Update your GA4 and Meta Pixel IDs in the HTML head for full tracking.');
