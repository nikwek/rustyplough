# Rusty Plough FC Website

Official website for the Rusty Plough Football Club - an over 40 soccer team based in Berkeley, CA.

## 🚀 Active Site: Hugo

The active website is now in the **`hugo-site/`** directory.

Built with Hugo static site generator for easy blog management and deployment.

**[Go to Hugo Site →](hugo-site/)**

---

## 📁 Directory Structure

- **`hugo-site/`** - Active Hugo website (use this!)
- **`old-static-site/`** - Archived static HTML version (backup only)
- **`files/`** - Additional files

## 🚀 Quick Start

### Local Development

```bash
cd hugo-site
hugo server --buildDrafts
# Visit http://localhost:1313
```

### Deploying to Cloudflare Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command**: `cd hugo-site && hugo`
     - **Build output directory**: `hugo-site/public`
     - **Environment variable**: `HUGO_VERSION = 0.119.0`
   - Click **Save and Deploy**

**See `hugo-site/README.md` for complete documentation.**

## 📝 Managing Content

### Adding Blog Posts

Create a new blog post with date prefix:

```bash
cd hugo-site/content/blog
# Create file: YYYY-MM-DD-title.md
# Example: 2025-09-21-afc-juventus-rusty-plough.md
```

**Front matter template:**
```yaml
---
title: "Match Title"
date: 2025-09-21
author: "Your Name"
description: ""
---
```

**Formatting tips:**
- Use `## Heading` for sections (gets automatic spacing)
- Use `## Golden Boot` for goal scorers (consistent with other posts)
- Double enter creates paragraph spacing
- Links are automatically yellow (theme color)

### Adding GIFE Match Pages

GIFE matches automatically appear on the International Competitions page when you create them.

**1. Create the match file:**
```bash
cd hugo-site/content/matches
# Create file: gife-location-year.md
# Example: gife-paris-2026.md
```

**2. Front matter template:**
```yaml
---
title: "GIFE VI"
subtitle: "🇫🇷 GIFE Paris"
date: 2026-06-15
location: "Paris, France"
team_home: "Paris FC Veterans"
team_away: "Rusty Plough"
score_home: 2
score_away: 3
layout: "match"
match_id: "paris-2026"
---
```

**3. Add match report content below the front matter**

**4. (Optional) Add photos/videos:**
- Upload media to R2: `https://media.rustyploughfc.com/`
- Create `hugo-site/data/matches/paris-2026.yaml`:
  ```yaml
  images:
    - paris-gife-team-photo.jpg
    - paris-gife-action-1.jpg
    - paris-gife-celebration.mp4
  ```

**Tips:**
- Use flag emojis in subtitle: 🇮🇪 🇬🇧 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇦🇺 🇩🇪 🇫🇷
- Match cards are generated automatically from the front matter
- Matches appear in reverse chronological order (newest first)

### Managing Images

**All images are hosted on Cloudflare R2:**
- Upload to: `https://media.rustyploughfc.com/`
- Reference in posts: `https://media.rustyploughfc.com/filename.jpg`

**Image templates:**

Hero image:
```html
<div style="text-align: center; margin-bottom: 2rem;">
  <img src="https://media.rustyploughfc.com/image.jpg" alt="Description" style="max-width: 100%; border-radius: 10px;">
</div>
```

Image with caption:
```html
<figure style="text-align: center; margin: 2rem 0;">
  <img src="https://media.rustyploughfc.com/image.jpg" alt="Description" style="max-width: 100%; border-radius: 10px;">
  <figcaption style="margin-top: 0.5rem; font-style: italic; color: #999;">Caption text</figcaption>
</figure>
```

Video embed with caption:
```html
<figure style="text-align: center; margin: 2rem 0;">
  <div style="max-width: 800px; margin: 0 auto;">
    {{< youtube VIDEO_ID >}}
  </div>
  <figcaption style="margin-top: 0.5rem; font-style: italic; color: #999;">Video caption</figcaption>
</figure>
```

### Managing the Homepage Carousel

1. Upload images to R2 (root directory): `carousel-slide01.jpg`, `carousel-slide02.jpg`, etc.
2. Edit `hugo-site/data/carousel.yaml`:
   ```yaml
   images:
     - carousel-slide01.jpg
     - carousel-slide02.jpg
     - carousel-slide03.jpg
   ```
3. Images appear in the order listed

## 📱 Features

- ✅ **Dynamic blog** - Write posts in Markdown
- ✅ **Match pages** with photo/video galleries
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Black & yellow** team colors (#FFCC08)
- ✅ **Lightbox viewer** for images and videos
- ✅ **Fast & free** hosting on Cloudflare Pages

## 📚 Documentation

- **`hugo-site/README.md`** - Complete Hugo documentation
- **`hugo-site/MIGRATION-GUIDE.md`** - What changed from static site
- **`old-static-site/`** - Archived static HTML files (backup)

## ⚽ RUST NEVER SLEEPS!
