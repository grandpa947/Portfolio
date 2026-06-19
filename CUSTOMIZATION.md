<!-- CUSTOMIZATION TEMPLATE SNIPPETS
     Copy and modify these snippets to customize your portfolio
     ========================================================== -->

<!-- HOW TO ADD YOUR HEADSHOT
     Replace the placeholder in the hero section with: -->

<!-- OPTION 1: Local image file -->
<img src="assets/headshot.jpg" alt="Professional headshot" class="headshot-image">

<!-- OPTION 2: External image URL -->
<img src="https://via.placeholder.com/400x500" alt="Professional headshot" class="headshot-image">


<!-- HOW TO ADD PORTFOLIO ITEMS
     Add this template to the portfolio-grid section: -->

<div class="portfolio-item" data-category="design">
    <div class="portfolio-image">
        <img src="assets/project-image.jpg" alt="Project name" loading="lazy">
    </div>
    <div class="portfolio-info">
        <h4>Your Project Title</h4>
        <p class="category-tag">Design</p>
        <p>Brief description of the project and your role</p>
    </div>
</div>


<!-- HOW TO ADD BRAND LOGOS
     Replace placeholder in brands-grid with: -->

<div class="brand-logo">
    <img src="assets/brand-logo.png" alt="Brand name" class="brand-image">
</div>


<!-- HOW TO UPDATE ACTING CREDITS
     Modify the credits in the acting-credits section: -->

<div class="credit-card">
    <h4>Your Film/Show Title</h4>
    <p class="role">Role: Character Name</p>
    <p class="details">2024 | Platform/Network</p>
</div>


<!-- HOW TO STYLE YOUR HEADSHOT IMAGE -->
<style>
    .headshot-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        display: block;
    }
</style>


<!-- HOW TO CONNECT CONTACT FORM WITH FORMSPREE

1. Go to https://formspree.io
2. Create a new form and get your form ID
3. Update the form tag in index.html:

<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- existing form fields -->
</form>

4. Remove the custom JavaScript form submission from js/script.js
5. Form will now send emails automatically

Alternative: Use EmailJS library for client-side email sending
-->


<!-- HOW TO UPDATE STATISTICS

Find the about-stats section and modify these values: -->

<div class="stat-card">
    <h3>50+</h3>  <!-- Change number -->
    <p>Design Projects</p>  <!-- Change label -->
</div>


<!-- HOW TO ADD SOCIAL MEDIA LINKS

Update these URLs in the Contact section: -->

<a href="https://instagram.com/your-username" target="_blank">Instagram</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="mailto:your-email@example.com">Email</a>


<!-- HOW TO CHANGE ACCENT COLOR

Edit the CSS variable in styles.css: -->

:root {
    --primary-color: #d4af37; /* Change this hex color to your preference */
    /* Other colors remain same */
}

Examples:
- Silver: #c0c0c0
- Copper: #b87333
- Rose Gold: #b76e79
- Teal: #008080
- Emerald: #50c878


<!-- HOW TO ADD MORE SECTIONS

Example: Adding a Testimonials section

<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">What Others Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">"Quote from casting director or client..."</p>
                <p class="testimonial-author">— Name, Title/Company</p>
            </div>
        </div>
    </div>
</section>

Then add CSS in styles.css for styling.
-->


<!-- HOW TO SETUP LAZY LOADING FOR IMAGES

Add data-src attribute instead of src:

<img data-src="assets/image.jpg" alt="Description" loading="lazy">

JavaScript will automatically load images when they come into view.
-->


<!-- HOW TO MINIFY FOR PRODUCTION

Use online tools or build tools to minify:

1. CSS Minifier: https://cssminifier.com
2. JavaScript Minifier: https://javascript-minifier.com
3. Or use build tools like Webpack, Gulp, etc.
-->


<!-- RECOMMENDED IMAGE SIZES

Headshot: 400x500 (or 800x1000 for 2x retina)
Portfolio Items: 300x300 (square) or 600x600 for 2x
Brand Logos: 200x100 (or 400x200 for 2x)
Showreel: 16:9 aspect ratio (use YouTube embed)
-->


<!-- QUICK VERIFICATION CHECKLIST

Run these checks before launching:

✓ Open index.html in browser - no errors in console (F12)
✓ Test mobile menu - hamburger appears on small screens
✓ Try portfolio filters - items show/hide correctly
✓ Fill out contact form - see success/error message
✓ Click navigation links - page smoothly scrolls
✓ Check on mobile device - everything looks good
✓ Verify all links work - no 404 errors
✓ Test keyboard navigation - Tab through elements
✓ Check hover states - buttons and cards respond
✓ Verify images load - use slow 3G in DevTools if needed
-->
