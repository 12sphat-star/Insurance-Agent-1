# Website Customization Guide

## 🚀 Quick Start: Make This Template Yours

This insurance agent website template is designed for easy customization. Follow these steps to personalize it with your information.

---

## Step 1: Update Configuration File

The `config.json` file in the root directory controls all your personal information.

**Location**: `/config.json`

```json
{
  "agent": {
    "name": "Your Full Name",
    "firstName": "First",
    "lastName": "Last",
    "title": "CFP, CLU",
    "phone": "(555) 123-4567",
    "email": "you@youragency.com",
    ...
  }
}
```

**What to Update**:
- `agent.name` - Your full name
- `agent.phone` - Your business phone number
- `agent.email` - Your business email
- `agency.name` - Your agency/business name
- `agency.tagline` - Your unique value proposition
- `agency.yearsInBusiness` - How long you've been in business
- `agency.statesLicensed` - Number of states you're licensed in
- `agency.familiesServed` - Approximate number of clients

---

## Step 2: Replace Placeholder Text in HTML Files

### Global Placeholders to Replace:

| Placeholder | Replace With | Example |
|------------|--------------|---------|
| `[Agent Name]` | Your full name | John Smith |
| `[Your Agency Name]` | Your agency name | Smith Financial Group |
| `[Your Tagline]` | Your value proposition | Protecting Families Since 2010 |
| `(XXX) XXX-XXXX` | Your phone number | (555) 123-4567 |
| `[YOUR_EMAIL]` | Your email | john@smithfinancial.com |
| `[X]+ Years` | Years in business | 15+ Years |
| `[X]+ States` | States licensed | 50+ States |
| `[XXX]+ Families` | Families served | 500+ Families |

### How to Replace:

**Option A: Manual Find & Replace**
1. Open each HTML file in your code editor
2. Use Find & Replace (Ctrl+H or Cmd+H)
3. Search for placeholder (e.g., `[Agent Name]`)
4. Replace with your information

**Option B: Automated Script** (Advanced)
Create a custom replacement script or modify `convert_to_template.py` with your specific values.

---

## Step 3: Replace Agent Photos

### Photos to Replace:

| Current File | Purpose | Recommended Size |
|-------------|---------|------------------|
| `/images/agent/headshot.jpg` | Main professional headshot | 800x800px min |
| `/images/hero/hero_woman.jpg` | Hero section image | 1200x800px min |
| `/images/agent/placeholder-office.jpg` | Office/casual photo | 1000x667px min |

### Photo Requirements:
- **Format**: JPG or PNG
- **Resolution**: High-resolution (at least 1200px width)
- **File Size**: Under 500KB (use compression tools like TinyPNG)
- **Quality**: Professional, well-lit, high-quality images
- **Style**: Consistent with brand (professional, trustworthy)

### How to Replace:
1. Prepare your photos (resize, compress)
2. Name them exactly as shown above
3. Upload to the correct `/images/` subdirectory
4. Overwrite existing placeholder files

---

## Step 4: Customize Colors (Optional)

### Primary Brand Colors

Edit `/css/main.css` and update the CSS variables:

```css
:root {
    /* Primary Color Palette */
    --primary: #1A2B3C;        /* Deep Navy - Change to your primary color */
    --accent: #C5A059;         /* Gold - Change to your accent color */
    --trust-green: #2D5A27;    /* Emerald Green - Change to your CTA color */
    
    /* Neutral Colors */
    --white: #FFFFFF;
    --light-gray: #F8F9FA;
    --medium-gray: #E5E7EB;
    --dark-gray: #4B5563;
    --black: #111827;
}
```

**Recommended Tools**:
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel and harmony rules

---

## Step 5: Update About Page Content

**File**: `/about.html`

### Sections to Customize:

1. **Your Story** (Lines 70-90)
   - Replace placeholder text with your personal journey
   - Why you got into insurance
   - What drives you to help families
   - Your unique approach

2. **Credentials** (Lines 100-120)
   - List your certifications (CFP, CLU, ChFC, etc.)
   - Professional memberships
   - Awards and recognitions

3. **Specializations** (Lines 130-150)
   - Your focus areas (IUL, Estate Planning, etc.)
   - Unique strategies you offer
   - Client types you serve best

**Writing Tips**:
- Be authentic and personal
- Use first-person ("I" not "we" unless you have a team)
- Include specific examples or stories
- Keep paragraphs short (3-4 sentences)
- Aim for 500-800 words total

---

## Step 6: Set Up Integrations

### GoHighLevel CRM Integration

**File**: `/js/forms.js`

1. Log in to your GoHighLevel account
2. Navigate to Settings → Webhooks
3. Create a new webhook for form submissions
4. Copy the webhook URL
5. Update in `forms.js`:

```javascript
const GHL_WEBHOOK = '[YOUR_GHL_WEBHOOK_URL]'; // Replace this
```

### Calendar/Booking Integration

**File**: `/js/calendar.js`

**For Calendly**:
1. Get your Calendly scheduling link
2. Update in `calendar.js`:

```javascript
const CALENDLY_URL = 'https://calendly.com/yourusername/30min';
```

**For Other Systems** (Acuity, ScheduleOnce, etc.):
- Replace the calendar widget code in `contact.html`
- Update the booking button links throughout the site

### Google Analytics

**File**: All HTML files (in `<head>` section)

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to each HTML file before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Step 7: Customize Service Pages

### Pages to Review:

- `/services/term-life-insurance.html`
- `/services/whole-life-insurance.html`
- `/services/indexed-universal-life.html`
- `/services/infinite-banking.html`
- `/services/annuities.html`
- `/services/estate-planning.html`
- `/services/health-insurance.html`

### What to Customize:

1. **Agent Insights** - Replace generic insights with your personal philosophy
2. **Process Steps** - Update to match your actual consultation process
3. **FAQs** - Add questions specific to your market/clients
4. **Case Studies** - Add real (anonymized) client examples

---

## Step 8: Test Everything

### Pre-Launch Checklist:

- [ ] All placeholder text replaced
- [ ] Agent photos uploaded and displaying
- [ ] Phone number clickable and correct
- [ ] Email links working
- [ ] Contact form submitting to correct destination
- [ ] Calendar booking working
- [ ] All internal links functional
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Page load speed acceptable (under 3 seconds)
- [ ] Google Analytics tracking

### Testing Tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Broken Link Checker](https://www.brokenlinkcheck.com/)

---

## Step 9: Deploy Your Site

### Deployment Options:

**Option A: Traditional Web Hosting**
1. Choose a hosting provider (Bluehost, SiteGround, HostGator)
2. Upload files via FTP or cPanel File Manager
3. Point your domain to hosting
4. Set up SSL certificate (free with Let's Encrypt)

**Option B: Modern Hosting (Recommended)**
1. **Netlify** (easiest):
   - Drag & drop your project folder
   - Auto-deploy from Git
   - Free SSL included
   - Custom domain support

2. **Vercel**:
   - Similar to Netlify
   - Excellent performance
   - Free tier available

3. **GitHub Pages**:
   - Free hosting
   - Requires Git knowledge
   - Custom domain support

### DNS Configuration:
- Point your domain's A record to your hosting IP
- Add CNAME for www subdomain
- Wait 24-48 hours for propagation

---

## Step 10: Ongoing Maintenance

### Monthly Tasks:
- [ ] Update blog with new content (aim for 1-2 posts/month)
- [ ] Review and respond to form submissions
- [ ] Check Google Analytics for traffic insights
- [ ] Update testimonials as you receive them
- [ ] Refresh photos/content seasonally

### Quarterly Tasks:
- [ ] Review and update service descriptions
- [ ] Check all links (internal and external)
- [ ] Update credentials/certifications
- [ ] Refresh statistics (families served, etc.)
- [ ] Performance audit and optimization

---

## Troubleshooting

### Common Issues:

**Images Not Displaying**
- Check file paths are correct (case-sensitive)
- Ensure images are in correct `/images/` subdirectory
- Verify file extensions match (`.jpg` vs `.jpeg`)

**Forms Not Submitting**
- Verify webhook URL is correct
- Check browser console for JavaScript errors
- Test with a simple email service first

**Mobile Layout Broken**
- Clear browser cache
- Check `/css/responsive.css` is loading
- Test on actual device, not just browser resize

**Animations Not Working**
- Ensure `/js/animations.js` is loading
- Check browser console for errors
- Verify GSAP CDN is accessible

---

## Support & Resources

### Helpful Documentation:
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [JavaScript Intro](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

### Recommended Tools:
- **Code Editor**: VS Code (free, powerful)
- **FTP Client**: FileZilla (free)
- **Image Compression**: TinyPNG, Squoosh
- **Color Picker**: ColorZilla (browser extension)

### Need Help?
- Review the `/docs/` folder for additional documentation
- Check `gap_analysis.md` for known issues and fixes
- Consult with a web developer for advanced customizations

---

## 🎉 You're Ready to Launch!

Once you've completed steps 1-9, your personalized insurance agent website is ready to go live. Remember to:

1. **Backup your files** before making major changes
2. **Test thoroughly** before going live
3. **Monitor analytics** to understand visitor behavior
4. **Update regularly** to keep content fresh

**Good luck with your new website!**
