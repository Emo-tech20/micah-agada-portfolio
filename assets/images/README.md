# Portfolio Assets - Images

## Portrait Image

### Purpose
Stores Micah Agada's professional portrait for the hero section.

### Current Implementation
- **Default:** SVG placeholder (renders if no image present)
- **Upload Feature:** Visitors can upload custom portrait (stored in browser's localStorage)

### For Production Deployment

Place your portrait image in this directory:
- **Recommended:** `portrait-default.jpg` or `portrait-default.png`
- **Recommended Size:** 400px wide × 500px tall (3:4 aspect ratio)
- **File Size:** < 500KB for fast loading
- **Format:** JPG (best) or PNG (if transparency needed)

### HTML Configuration

To use a persistent portrait asset for all visitors, update `index.html`:

**Current:**
```html
<img id="portraitImage" 
     src="data:image/svg+xml,..." 
     alt="Micah Agada - Graphic & UI/UX Designer" 
     class="portrait-image">
```

**To use this asset:**
```html
<img id="portraitImage" 
     src="assets/images/portrait-default.jpg" 
     alt="Micah Agada - Graphic & UI/UX Designer" 
     class="portrait-image">
```

### Upload Feature (Client-Side)

Visitors can still upload their own portrait via the orange **+** button:
- Uploads stored in browser's localStorage
- Persists across page reloads (same browser only)
- Doesn't affect the default image

### Git & Deployment

If you add a portrait image:

```bash
# Add to Git
git add assets/images/portrait-default.jpg
git commit -m "Add default portrait image"
git push origin main

# Then deploy to Vercel
# (Vercel will include the image automatically)
```

### Notes
- Images are not required for deployment (SVG placeholder works fine)
- If you add an image, Vercel will serve it via CDN (fast)
- localStorage upload feature will still work for visitors to customize
- To use different portrait per page/visit, keep using localStorage only

---

**Placement:** `portfolio/assets/images/`  
**Current Status:** Directory ready for image files  
**Recommended:** Add `portrait-default.jpg` before final deployment
