# Recent Fixes

## Width Issue - FIXED ✅

**Problem:** Hugo site was narrower than the static site (768px instead of full width)

**Cause:** Default Hugo theme CSS file had `max-width: 768px` on the body element

**Solution:** Removed `themes/rustyplough/assets/css/main.css` - we're using our own `static/css/styles.css`

**Result:** Site now displays at full width (1200px max-width on containers, same as static site)

## Images Added ✅

**Copied from old site:**
- ✅ `logo.png` - Team logo (now shows in hero section)
- ✅ `hero-background.jpg` - Hero background image (now displays)

**Location:** `themes/rustyplough/static/images/`

**Created directories for:**
- `images/carousel/` - For home page slideshow
- `images/matches/` - For match photos
- `videos/matches/` - For match videos

## How to Add More Images

### Carousel Images
```bash
cp your-image.jpg hugo-site/themes/rustyplough/static/images/carousel/
```

Then edit `themes/rustyplough/layouts/index.html` to reference them.

### Match Photos
```bash
cp your-photos/* hugo-site/themes/rustyplough/static/images/matches/berlin-2025/
```

Then update the match page template or individual match pages.

## Verification

The Hugo site should now:
- ✅ Display at full width (same as static site)
- ✅ Show logo in hero section
- ✅ Show hero background image
- ✅ Have proper spacing and layout

Refresh your browser preview to see the changes!
