# ⚡ Quick Start Setup - 15 Minute Configuration

## 🎯 Essential Configurations (Do These First)

### 1. **Update Your Contact Info** (2 minutes)
Open `index.html` and search for these placeholders:

**Line ~60-65:** Floating buttons
```html
<a href="https://instagram.com/yourhandle" ... <!-- Update your Instagram handle -->
<a href="https://wa.me/1234567890" ... <!-- Update your WhatsApp number -->
<a href="mailto:hello@example.com" ... <!-- Update your email -->
```

**Line ~575:** Contact form info
```html
<p><strong>Email:</strong> <a href="mailto:hello@example.com">hello@example.com</a></p>
```

### 2. **Configure Google Analytics** (3 minutes)
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Start Measuring"
3. Create account for your portfolio
4. Get your Measurement ID (looks like: G-XXXXXXXXXX)
5. Find line 42-46 in index.html:
```javascript
gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID
```

### 3. **Set Up Contact Form** (3 minutes)

**Fastest Option - Formspree:**
1. Visit [formspree.io](https://formspree.io)
2. Sign up with email
3. Create new form
4. Use your form URL: `https://formspree.io/f/mbdbvwgb`
5. Find `<form id="contactForm"` in index.html
6. Add to form tag: `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`
7. Done! Emails go to your inbox automatically

### 4. **Update Social Links** (2 minutes)
Find and update these in `index.html`:

- Line ~575: Email and location
- Line ~589: Instagram link  
- Line ~593: LinkedIn link
- Line ~597: Email link

Also update meta tags (lines 12-14):
- `og:url` - Your actual domain
- `og:image` - Link to your hero image

### 5. **Add Your Headshot** (2 minutes)
- Add image to `assets/` folder
- Update image path in index.html near line ~107:
```html
<img src="assets/IMG_6811.jpg" alt="Professional headshot" class="headshot-image">
```

### 6. **Customize Content** (3 minutes)
Quick replacements in index.html:

- **Hero tagline** (line ~97): Update "Actor • Graphic Designer • Digital Creative"
- **Hero subtitle** (line ~98): Update tagline
- **Social stats** (lines ~99-102): Update followers, projects, rating
- **About section** (lines ~135-145): Replace with your bio
- **Acting credits** (lines ~200-220): Update your roles
- **Testimonials** (lines ~378-410): Add 2-3 real quotes
- **Contact info** (lines ~770-776): Update your details

## 📊 Optional Advanced Setup

### Meta Pixel (Facebook Tracking)
1. Go to Facebook Business Suite
2. Find or create Pixel
3. Get Pixel ID
4. Find line 52 in index.html
5. Replace `YOUR_PIXEL_ID`

### Instagram Feed Integration
**Choose One:**

**Option A - Manual (Easiest)**
- Add images to `assets/` folder
- Update portfolio section with image paths

**Option B - EmbedSocial (Recommended)**
1. Go to [embedsocial.com](https://embedsocial.com)
2. Sign up
3. Connect Instagram account
4. Get embed code
5. Replace Instagram feed section (line ~677)

### Blog Section
Update 3 placeholder blog cards (around line ~705):
- Date
- Category
- Title
- Description
- Link

## 🚀 Test Your Setup

### 1. **Test Locally**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### 2. **Test on Mobile**
- Open DevTools (F12)
- Click phone icon
- Check all sections look good

### 3. **Test Form**
- Fill out contact form
- Should see success message
- (Check email if Formspree configured)

### 4. **Test Floating Buttons**
- Click Instagram DM button
- Should open Instagram
- Test WhatsApp button
- Test Email button

### 5. **Run Lighthouse Audit**
- DevTools → Lighthouse
- Click "Analyze page load"
- Check scores are 90+

## 📱 Final Checks

- [ ] All contact links work (Instagram, WhatsApp, Email)
- [ ] Form submission works
- [ ] Headshot image loads
- [ ] Mobile menu works
- [ ] Looks good on phone (use DevTools)
- [ ] Looks good on desktop
- [ ] All text is your content (not placeholders)
- [ ] Analytics configured
- [ ] Form backend configured

## 🎯 After Launch

### First Week:
1. Share link on social media
2. Send to 5-10 industry contacts
3. Monitor analytics (GA4)
4. Test that inquiries come through

### Ongoing:
1. Update portfolio quarterly
2. Write blog post monthly
3. Respond to inquiries within 24 hours
4. Update social stats occasionally
5. Monitor analytics, optimize CTAs

## 💡 Pro Tips

**For Maximum Conversions:**
1. Make first CTA visible above fold (hero section)
2. Repeat CTA every 2-3 sections
3. Floating buttons stay visible (mobile traffic)
4. Clear value proposition in hero
5. Proof (testimonials, stats) build trust

**For Better Rankings:**
1. Update blog monthly (boost SEO)
2. Use keywords in descriptions
3. Optimize image sizes (<100KB each)
4. Mobile responsive (essential now)
5. Fast loading (Lighthouse 90+)

**For Engagement:**
1. Respond to inquiries ASAP
2. Make DM easy (floating buttons)
3. Professional email signatures
4. Clear work samples in portfolio
5. Regular content updates

## 🆘 Troubleshooting

**Form not working?**
- Check Formspree config is in form tag
- Try submitting again
- Check browser console for errors (F12)

**Analytics not tracking?**
- Verify GA4 ID is correct (G-XXXX format)
- Check Google Analytics site is created
- Wait 24 hours for first data

**Image not showing?**
- Check image file exists in `assets/` folder
- Check file path is correct in HTML
- Try different image format (JPG, PNG)

**Mobile menu not working?**
- Check JavaScript is enabled
- Try refreshing page
- Clear browser cache

**Need Help?**
- Check CUSTOMIZATION.md for code snippets
- Check .github/copilot-instructions.md for detailed guides
- Check browser console (F12) for errors
- Test with different browser

## 📞 Service Integration Links

- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Google Analytics**: https://analytics.google.com
- **Meta Pixel**: https://business.facebook.com
- **EmbedSocial**: https://embedsocial.com

---

**Estimated Setup Time**: 15-20 minutes
**Difficulty**: Easy (no coding required)
**Result**: Fully functional, conversion-optimized portfolio site
**Next Step**: Deploy to hosting and share link!
