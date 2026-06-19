# Creative Portfolio Website

A sleek, modern single-page portfolio website for a multidisciplinary creative professional (actor, graphic designer, and digital marketer).

## ✨ Features

### Sections Included
- **Hero** - Full-screen intro with name, tagline, headshot placeholder, and "Work With Me" CTA
- **About** - Professional bio blending personality with expertise, plus key statistics
- **Acting** - Showreel embed, credits/roles grid, and professional materials downloads
- **Skills & Services** - Four interactive cards highlighting core competencies with icons
- **Portfolio/Work** - Filterable gallery grid for design projects, social campaigns, and behind-the-scenes content
- **Brand Collaborations** - Section showcasing past partnerships and open-to-work statement
- **Contact** - Simple form with name, email, opportunity type, and message fields plus social links

### Design Features
- **Dark Theme** - Modern dark background (#0f0f0f) with neutral secondary colors
- **Gold Accent Color** - Professional gold (#d4af37) for primary interactive elements
- **Cinematic Feel** - Bold typography, smooth animations, and premium aesthetics
- **Mobile-First** - Fully responsive design optimized for all devices
- **Fast Loading** - Lightweight vanilla JavaScript, optimized CSS, lazy loading ready
- **Smooth Animations** - CSS transitions, scroll animations, and interactive hover states
- **Navigation** - Fixed navbar with mobile hamburger menu

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in your browser
2. Customize content with your own information
3. Replace placeholder images and videos
4. Update social media links and contact details

### File Structure
```
my_portfolio/
├── index.html           # Main HTML structure
├── css/
│   └── styles.css       # All styling (dark theme + animations)
├── js/
│   └── script.js        # JavaScript for interactivity
└── assets/              # Folder for images, videos, etc.
```

## 🎨 Customization Guide

### Update Personal Information
1. Change name and tagline in the Hero section
2. Update bio in the About section
3. Add your acting credits in the Acting section
4. Customize social media links in the Contact section

### Replace Placeholders
- **Headshot**: Replace `.headshot-placeholder` div with an `<img>` tag
- **Showreel**: Update YouTube embed URL in the iframe
- **Portfolio Images**: Add images to `assets/` folder and update portfolio grid
- **Brand Logos**: Upload brand logos or replace placeholders

### Customize Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #d4af37; /* Change gold to another color */
    --dark-bg: #0f0f0f;       /* Background color */
    --secondary-bg: #1a1a1a;  /* Secondary background */
    --text-light: #e8e8e8;    /* Text color */
}
```

### Add Contact Form Backend
The contact form currently shows a success message locally. To make it functional:
1. Set up a backend service (e.g., Formspree, EmailJS, or custom PHP)
2. Update the form submission in `js/script.js`
3. Configure email notifications

## 📱 Responsive Design

The site is fully responsive:
- **Desktop**: Multi-column layouts, horizontal navigation
- **Tablet**: Optimized grid spacing, touch-friendly buttons
- **Mobile**: Single-column layout, hamburger menu, large touch targets

## ⚡ Performance

- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with minimal dependencies
- Ready for lazy loading images
- Mobile-optimized file sizes
- Fast initial load time

## 🎯 Key Interactive Features

1. **Mobile Menu** - Hamburger menu that toggles on mobile devices
2. **Portfolio Filtering** - Click filter buttons to show/hide portfolio items
3. **Smooth Scrolling** - Navigation links smoothly scroll to sections
4. **Form Validation** - Contact form validates input before submission
5. **Scroll Animations** - Elements animate into view as you scroll
6. **Navbar Effects** - Navbar gets subtle shadow on scroll

## 📝 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## 🔧 Development Tips

### Testing Mobile View
- Use browser DevTools (F12) to test responsive design
- Test on actual mobile devices for optimal experience

### Adding New Content
- Maintain consistent spacing and styling
- Follow existing HTML/CSS patterns
- Keep animations subtle and professional
- Ensure accessibility with alt text for images

### Optimizing Images
- Use optimized/compressed images
- Provide multiple image sizes for responsive design
- Add `alt` attributes to all images

## 📄 License

This portfolio template is free to use and customize. Make it your own!

## 🤝 Support

For issues or questions:
1. Check existing HTML comments in the code
2. Review CSS variables for quick styling changes
3. Verify JavaScript is enabled in your browser

---

**Built with**: HTML5 • CSS3 • Vanilla JavaScript

**Last Updated**: June 2026

Enjoy your professional portfolio! 🎬✨
