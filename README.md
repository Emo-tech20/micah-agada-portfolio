# Micah Agada - Design Portfolio

A professional, fully responsive portfolio website for Micah Agada, Graphic Designer & UI/UX Designer. Built with pure HTML5, CSS3, and vanilla JavaScript—no frameworks or build tools required.

**Design Version:** 2.0 (Premium Upgrade - October 2026)
- Space Grotesk typography from Google Fonts
- Luxury color palette with purple accent
- Inline SVG icons throughout
- 100% static frontend, ready for deployment

## Features

- **Modern Typography** - Space Grotesk font (weights 400, 500, 600, 700) from Google Fonts
- **Premium Colors** - Sophisticated palette with vibrant purple accent (#6C4DFF)
- **SVG Icons** - Lightweight inline SVG icons with accessibility features
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-reveal animations using Intersection Observer API
- **Mobile Navigation** - Hamburger menu for mobile devices with smooth transitions
- **Accessibility** - Keyboard navigation, focus states, ARIA labels, reduced-motion support
- **Performance** - Lightweight, fast-loading static site (~40KB)
- **SEO Friendly** - Semantic HTML5 with proper meta tags

## Color Palette

- **Background:** #F7F5F0 (warm off-white)
- **Text Primary:** #171717 (deep charcoal)
- **Text Secondary:** #686868 (warm grey)
- **Primary Accent:** #6C4DFF (vibrant purple)
- **Accent Hover:** #5435E8 (deeper purple)
- **Soft Accent:** #ECE7FF (light purple tint)
- **Card Background:** #FFFFFF (clean white)
- **Dark Background:** #171717 (contrast sections)
- **Dark Text:** #F7F5F0 (light on dark)
- **Borders:** #E5E0D8 (subtle dividers)

## Project Structure

```
portfolio/
├── index.html                  # Main HTML file with all sections
├── css/
│   └── style.css              # All styling and responsive design
├── js/
│   └── script.js              # Interactive functionality
├── assets/
│   └── images/                # Placeholder for future project images
├── README.md                  # This file
└── spec.md                    # Complete project specification
```

## Sections Included

1. **Navigation** - Sticky header with logo and menu links
2. **Hero Section** - Large title, introduction, and call-to-action button
3. **About Me** - Professional biography with stats and visual placeholder
4. **Services & Skills** - 6 services displayed in responsive grid
5. **Selected Projects** - 4 projects with descriptions and external links
6. **Design Process & Case Studies** - Sharesat and Momentum deep-dives
7. **Experience** - Timeline layout of volunteer positions
8. **Contact** - Email, phone, and location with functional links
9. **Footer** - Copyright and navigation links

## Portfolio Projects

### 1. Sharesat Application
- **Category**: UI/UX Design
- **Description**: A crypto transaction app that makes transactions easy and seamless
- **Link**: [View on Figma](https://www.figma.com/design/VH6t4yDfwXnNTOUTF4e01V/sharesat-project?node-id=0-1&t=yiK2d1axeAK8Vbx0-1)

### 2. Momentum Platform
- **Category**: UI/UX Design
- **Description**: Platform for connecting event attendees before the event day
- **Link**: [View on Figma](https://www.figma.com/design/2PZEbL9EhXy1DDiWXJX9yr/Momentum?node-id=438-54&t=kKQC2JNN46VFcCrK-1)

### 3. Northstar Carousel
- **Category**: Graphic Design
- **Description**: Creative carousel design for visual storytelling
- **Link**: [View on Google Drive](https://drive.google.com/drive/folders/1RyCMN3zBg_HGqLtujz356DIIgwIbl3q7?usp=sharing)

### 4. Tuntac Brand Guideline
- **Category**: Brand Consulting
- **Description**: Comprehensive brand guideline for visual consistency
- **Link**: [View on Google Drive](https://drive.google.com/drive/folders/1rxMGz-g6muFmkySWtY0OhWSC7MIHfpUT?usp=sharing)

## Font and Typography

**Space Grotesk from Google Fonts**
- Imported via `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap')`
- Font weights: 400 (body), 500 (medium), 600 (semi-bold), 700 (bold headings)
- Applied throughout: headings, navigation, buttons, body text, footer
- Fallback: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## Icons and SVG

**Icon Strategy**
- All icons implemented as inline SVG (no icon fonts or emoji)
- 7 total SVG elements:
  - 1 decorative hero placeholder (person silhouette)
  - 6 external link icons (on project and case study buttons)
- SVGs use `currentColor` to inherit text color
- Decorative SVGs marked with `aria-hidden="true"`
- Lightweight and performant (no external dependencies)

### Local Setup

1. **Clone or download** the portfolio directory
2. **Open the file** directly in your browser:
   - Windows: Double-click `index.html`
   - Mac/Linux: Right-click `index.html` → Open with → Your browser
   - Or drag `index.html` into your browser window

3. **No server required** - The website runs entirely in the browser as a static site

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features & Functionality

### Mobile Menu
- Toggle hamburger menu on screens under 768px
- Menu automatically closes when a link is clicked
- Keyboard accessible with Escape key support

### Smooth Navigation
- All navigation links scroll smoothly to sections
- Active link highlighting as you scroll
- Sticky navigation stays visible at top

### Animations
- Scroll-reveal animations on cards and elements
- Hover effects on buttons, cards, and links
- Respects `prefers-reduced-motion` for accessibility

### Dynamic Content
- Copyright year updates automatically
- Email and phone links use proper protocols (`mailto:` and `tel:`)
- All external project links open in new tabs

### Accessibility
- Semantic HTML5 markup
- Proper heading hierarchy
- Focus states on all interactive elements
- Keyboard navigation support
- Color contrast meets WCAG standards
- Alt text ready for project images

## Customization

### Update Portfolio Information

**Edit contact details** in `index.html`:
```html
<!-- Find the contact section and update: -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+yourphonenumber">Your Phone</a>
```

**Replace placeholder images**:
1. Add your image to `assets/images/`
2. Update the placeholder divs with `<img>` tags:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

**Add new projects**:
1. Copy a project card in the projects section
2. Update title, category, description, and link
3. Add a new case study if needed

### Customize Colors

Edit the CSS variables at the top of `css/style.css`:
```css
:root {
    --primary-dark: #2c2c2c;      /* Main text color */
    --primary-light: #f5f1ed;     /* Background color */
    --accent-grey: #8b7b6f;       /* Accent color */
    --text-secondary: #666;       /* Secondary text */
    /* ... other colors */
}
```

### Customize Typography

Modify font sizes and families in `css/style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Change to your preferred font */
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if using version control):
   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

2. **Create Vercel account** at [vercel.com](https://vercel.com)

3. **Import your repository**:
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

4. Your portfolio is now live at `your-domain.vercel.app`

### Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages
   - Select "Deploy from a branch"
   - Choose `main` branch
   - Save

3. Your portfolio is now live at `username.github.io/repository-name`

### Deploy to Netlify

1. **Create Netlify account** at [netlify.com](https://netlify.com)

2. **Drag and drop the portfolio folder** into Netlify Deploy area

3. Your portfolio is instantly live with a Netlify URL

## Performance

- **Lightweight**: ~40KB total (HTML + CSS + JS)
- **Fast loading**: No external dependencies or heavy scripts
- **Optimized images**: SVG placeholders for instant rendering
- **Mobile optimized**: Responsive design and touch-friendly

## Testing Checklist

- [x] Navigation links work and scroll smoothly
- [x] Mobile menu opens/closes correctly
- [x] All external project links open in new tabs
- [x] Email link opens mail client
- [x] Phone link works on mobile
- [x] Responsive on mobile (375px), tablet (768px), desktop (1200px)
- [x] Animations work smoothly
- [x] Keyboard navigation functional
- [x] Focus states visible on all interactive elements
- [x] No console errors in browser
- [x] Footer copyright year is current

## Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy (h1, h2, h3, h4)
- Focus indicators on all interactive elements
- Keyboard navigation support
- Reduced motion media query for users with vestibular disorders
- Color contrast compliant
- Alt text prepared for images
- ARIA labels on interactive elements

## Browser Testing

Tested and verified on:
- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Safari (latest)
- ✅ Microsoft Edge (latest)
- ✅ Mobile Chrome
- ✅ Mobile Safari

## Maintenance

### Regular Updates

1. **Update project information** as new projects are completed
2. **Add case studies** for significant projects
3. **Keep external links current** - periodically test all links
4. **Update skills** as you develop new capabilities
5. **Add testimonials** if client feedback becomes available

### Best Practices

- Keep the site lightweight
- Test all links monthly
- Update footer copyright year annually (automatic)
- Backup regularly before making changes
- Test on multiple devices before deployment

## Support & Questions

For issues or questions about the portfolio website:

1. Check the **spec.md** for detailed requirements
2. Review the **code comments** in HTML, CSS, and JS
3. Verify browser compatibility
4. Check the **Testing Checklist** above

## License

This portfolio website is created for Micah Agada's professional use.

## Contact

- **Email**: micahagada8@gmail.com
- **Phone**: +234 814 860 6250
- **Location**: Jalingo, Taraba State, Nigeria

---

**Built with**: HTML5 • CSS3 • Vanilla JavaScript  
**Deployed to**: Ready for Vercel, GitHub Pages, or Netlify  
**Last Updated**: October 2026
