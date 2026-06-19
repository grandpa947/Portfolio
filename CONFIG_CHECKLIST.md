# 🔧 CONFIGURATION CHECKLIST - Where to Replace Everything

## 📍 KEY REPLACEMENT LOCATIONS

### 1️⃣ FLOATING ACTION BUTTONS (Lines ~55-68)
**Current:**
```html
<a href="https://instagram.com/yourhandle" ...
<a href="https://wa.me/1234567890" ...
<a href="mailto:hello@example.com" ...
```

**Replace With:**
```html
<a href="https://instagram.com/YOUR_ACTUAL_USERNAME" ...
<a href="https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER" ...
<a href="mailto:YOUR_ACTUAL_EMAIL@example.com" ...
```

**Examples:**
- Instagram: `https://instagram.com/johnsmith`
- WhatsApp: `https://wa.me/12025551234` (format: +country code + number)
- Email: `mailto:john@example.com`

---

### 2️⃣ GOOGLE ANALYTICS GA4 (Lines ~42-46)
**Current:**
```javascript
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID
```

**Replace With:**
```javascript
gtag('config', 'G-XXXXXXXXXX'); // Your actual GA4 ID
```

**How to Get GA4 ID:**
1. Go to analytics.google.com
2. Create new property
3. Copy Measurement ID (looks like: G-XXXXXXXXXX)

---

### 3️⃣ META PIXEL (Line ~51)
**Current:**
```javascript
fbq('init', 'YOUR_PIXEL_ID'); // Replace with your Meta Pixel ID
```

**Replace With:**
```javascript
fbq('init', '123456789'); // Your actual Pixel ID
```

**How to Get Meta Pixel ID:**
1. Go to business.facebook.com
2. Create/find Pixel
3. Copy Pixel ID (15 digits)

---

### 4️⃣ OPEN GRAPH TAGS (Lines ~15-24)
**Current:**
```html
<meta property="og:url" content="https://yourportfolio.com">
<meta property="og:image" content="https://yourportfolio.com/assets/og-image.jpg">
```

**Replace With:**
```html
<meta property="og:url" content="https://your-actual-domain.com">
<meta property="og:image" content="https://your-actual-domain.com/assets/og-image.jpg">
```

**Purpose:** Link previews on WhatsApp, LinkedIn, Twitter

---

### 5️⃣ CONTACT FORM BACKEND (Lines ~590-595)

**IF USING FORMSPREE:**
Find: `<form id="contactForm" class="contact-form">`

Change to:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**How to Get Formspree ID:**
1. Go to formspree.io
2. Create form
3. Copy ID from URL (format: /f/abcdef123)

**Result:** Emails automatically sent to inbox

**IF USING EMAILJS:**
1. Follow instructions in js/script.js (around line 160)
2. Uncomment EmailJS section
3. Add your Public Key, Service ID, Template ID
4. Emails sent when form submitted

---

### 6️⃣ HERO SECTION CONTENT (Lines ~97-102)
**Current:**
```html
<h1 class="hero-title">Creative Vision.</h1>
<p class="hero-tagline">Actor • Graphic Designer • Digital Creative</p>
<p class="hero-subtitle">Elevating brands and storytelling...</p>
<div class="hero-stats">
    <span class="stat-badge"><i class="fab fa-instagram"></i> 10K+ followers</span>
    <span class="stat-badge"><i class="fas fa-film"></i> 15+ projects</span>
    <span class="stat-badge"><i class="fas fa-star"></i> 5/5 rating</span>
</div>
```

**Replace With Your:**
- Title (main headline)
- Tagline (subtitle with your specialties)
- Actual stats (followers, projects, rating)

---

### 7️⃣ HERO STATS (Lines ~99-102)
**Update these numbers:**
- 10K+ followers → Your actual Instagram followers
- 15+ projects → Your portfolio count
- 5/5 rating → Your actual rating

---

### 8️⃣ ABOUT SECTION BIO (Lines ~135-145)
**Replace all three paragraphs with your bio**

Keep the structure:
- Paragraph 1: Who you are + background
- Paragraph 2: Skills + unique value
- Paragraph 3: How you can help

---

### 9️⃣ SOCIAL STATS CARDS (Lines ~149-156)
**Update these:**
```html
<div class="stat-card">
    <h3>10+</h3>
    <p>Acting Credits</p>
</div>
<div class="stat-card">
    <h3>50+</h3>
    <p>Design Projects</p>
</div>
<div class="stat-card">
    <h3>100K+</h3>
    <p>Social Reach</p>
</div>
```

Replace numbers with your actual statistics

---

### 🔟 ACTING CREDITS (Lines ~200-220)
**Replace each credit card:**
```html
<div class="credit-card">
    <h4>Your Film/Show Title</h4>
    <p class="role">Role: Character Name</p>
    <p class="details">2024 | Platform/Network</p>
</div>
```

Add 4 of your actual credits

---

### 1️⃣1️⃣ DOWNLOAD BUTTONS (Lines ~225-230)
**If you have comp card/resume, update URLs:**
```html
<a href="path/to/your/compcard.pdf" class="btn btn-secondary">
    <i class="fas fa-download"></i> Download Comp Card
</a>
```

---

### 1️⃣2️⃣ TESTIMONIALS (Lines ~378-410)
**Replace 3 testimonial cards:**
```html
<div class="testimonial-card">
    <div class="testimonial-stars">
        <i class="fas fa-star"></i> × 5
    </div>
    <p class="testimonial-text">"Your quote here..."</p>
    <p class="testimonial-author">— Name, Title at Company</p>
</div>
```

Use real quotes from:
- Casting directors
- Brand managers
- Design clients
- Collaborators

---

### 1️⃣3️⃣ PORTFOLIO ITEMS (Lines ~300-380)
**Replace each portfolio item with actual work:**
```html
<div class="portfolio-item" data-category="design">
    <div class="portfolio-image">
        <img src="assets/your-image.jpg" alt="Project name" loading="lazy">
    </div>
    <div class="portfolio-info">
        <h4>Your Project Title</h4>
        <p class="category-tag">Design</p>
        <p>Brief description</p>
    </div>
</div>
```

Categories: design, social, behind-the-scenes

---

### 1️⃣4️⃣ INSTAGRAM PROFILE (Lines ~640-655)
**Update Instagram profile info:**
```html
<img src="assets/IMG_6811.jpg" alt="Profile" class="insta-avatar">
<p class="insta-username">@yourhandle</p>
```

And button:
```html
<a href="https://instagram.com/YOUR_HANDLE" target="_blank" ...>
```

---

### 1️⃣5️⃣ BLOG ARTICLES (Lines ~705-760)
**Replace 3 blog card placeholders:**
```html
<article class="blog-card">
    <div class="blog-image">
        <div class="blog-placeholder">
            <i class="fas fa-pen-fancy"></i>
        </div>
        <span class="blog-date">June 1, 2026</span>
    </div>
    <div class="blog-content">
        <span class="blog-category">Acting</span>
        <h3>Your Article Title</h3>
        <p>Your article description...</p>
        <a href="/blog/article-url" class="read-more">Read More →</a>
    </div>
</article>
```

---

### 1️⃣6️⃣ CONTACT FORM EMAIL (Lines ~770-776)
**Update contact information:**
```html
<p><strong>Email:</strong> <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a></p>
<p><strong>Location:</strong> Your Location / Remote</p>
```

---

### 1️⃣7️⃣ SOCIAL LINKS (Lines ~780-800)
**Update all social media links:**
```html
<a href="https://instagram.com/YOUR_HANDLE" target="_blank">Instagram</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">LinkedIn</a>
<a href="mailto:YOUR_EMAIL@example.com">Email</a>
```

---

### 1️⃣8️⃣ FOOTER (Lines ~815-820)
**Update footer text:**
```html
<p>&copy; 2026 Your Name / Creative Portfolio. All rights reserved.</p>
```

---

## 🎨 CSS CUSTOMIZATION

### Change Accent Color
**File:** css/styles.css
**Line:** 12 (approx)

**Current:**
```css
--primary-color: #d4af37; /* Gold accent */
```

**Popular Alternatives:**
- Silver: `#c0c0c0`
- Rose Gold: `#b76e79`
- Teal: `#008080`
- Emerald: `#50c878`
- Copper: `#b87333`

---

## ✅ PRIORITY REPLACEMENTS (Do These First!)

### MUST DO (3 minutes):
- [ ] Instagram URL in floating buttons (line ~57)
- [ ] WhatsApp number in floating buttons (line ~61)
- [ ] Email address in floating buttons (line ~65)
- [ ] GA4 ID (line ~46)
- [ ] Contact form backend (Formspree/EmailJS)

### SHOULD DO (10 minutes):
- [ ] Hero tagline (line ~100)
- [ ] Hero stats (followers, projects, rating)
- [ ] About bio (lines 135-145)
- [ ] Contact email (line ~770)

### NICE TO HAVE (Optional):
- [ ] Meta Pixel ID (for retargeting)
- [ ] Open Graph URL/image (for link previews)
- [ ] Testimonials (build trust)
- [ ] Blog articles (SEO)

---

## 🚀 TESTING AFTER UPDATES

### Test Each Change
1. **Update floating buttons** → Click each one
2. **Update GA4** → Wait 24 hours, check analytics.google.com
3. **Update contact form** → Submit test submission
4. **Update social links** → Click each link
5. **Update images** → Verify they load

### Tools
- **Check Links**: Use DevTools (F12) → Console
- **Test Mobile**: DevTools → Device Mode
- **Audit Performance**: DevTools → Lighthouse

---

## 📝 FIND & REPLACE SHORTCUTS

### Using VS Code:
1. Press `Ctrl+H` (or `Cmd+H`)
2. Find: `yourhandle`
3. Replace: `your_actual_username`
4. Click "Replace All"

**Repeat for:**
- yourhandle → your Instagram handle
- 1234567890 → your WhatsApp number
- hello@example.com → your email
- G-XXXXXXXXXX → your GA4 ID
- YOUR_PIXEL_ID → your Meta Pixel ID

---

## 🎯 VALIDATION CHECKLIST

Before launching, verify:
- [ ] No more placeholder URLs (Instagram, WhatsApp, Email)
- [ ] GA4 ID replaced (G-XXXX format)
- [ ] Form backend configured (Formspree/EmailJS)
- [ ] Hero content is your own
- [ ] At least some portfolio items added
- [ ] Contact info updated
- [ ] Images loads properly
- [ ] Mobile menu works
- [ ] Form submits successfully

---

## 🆘 COMMON MISTAKES

**❌ Left "yourhandle" in floating buttons**
→ Social buttons won't work

**❌ Didn't replace GA4 ID**
→ Analytics won't track

**❌ Didn't set up contact form**
→ Form won't send emails

**❌ Used wrong WhatsApp format**
→ Correct: `https://wa.me/12025551234` (country code first!)

**❌ Left placeholder testimonials**
→ Reduces trust significantly

---

## ✨ FINAL TIPS

1. **Keep it professional** - Check spelling and grammar
2. **Use real content** - Avoid placeholders where possible
3. **Add actual testimonials** - Real quotes build trust
4. **Keep images optimized** - Max 100KB each (use TinyPNG)
5. **Test everything** - Mobile, desktop, all links
6. **Respond quickly** - Reply to inquiries within 24 hours

---

**Ready?** Follow this checklist and your portfolio will be perfectly configured and ready to attract opportunities! 🎬✨
