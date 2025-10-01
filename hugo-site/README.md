# Rusty Plough FC - Hugo Website

Official website for the Rusty Plough Football Club - an over 40 soccer team based in Berkeley, CA.

Built with Hugo static site generator for easy blog management and deployment.

## 🚀 Quick Start

### Local Development

```bash
# Start the Hugo development server
hugo server --buildDrafts

# Visit http://localhost:1313
```

### Build for Production

```bash
# Build the static site
hugo

# Output will be in the public/ directory
```

## 📝 Managing Content

### Adding Blog Posts

Create a new blog post:

```bash
hugo new content/blog/my-post-title.md
```

Or manually create a file in `content/blog/` with this format:

```markdown
---
title: "Your Post Title"
date: 2025-01-15
author: "Your Name"
description: "Brief description"
---

Your post content here in Markdown format.

## Subheadings

- Bullet points
- **Bold text**
- *Italic text*
```

### Adding Match Pages

Create a new match page:

```bash
hugo new content/matches/match-name.md
```

Or manually create with this format:

```markdown
---
title: "GIFE VI - Match Title"
date: 2025-06-01
location: "City, Country"
team_home: "Rusty Plough"
team_away: "Opponent Name"
score_home: 2
score_away: 1
layout: "match"
---

Your match report content here.
```

## 📁 Directory Structure

```
hugo-site/
├── content/
│   ├── blog/              # Blog posts (Markdown files)
│   ├── matches/           # Match pages
│   └── international.md   # International competitions page
├── themes/rustyplough/
│   ├── layouts/           # HTML templates
│   │   ├── _default/
│   │   ├── blog/
│   │   ├── partials/
│   │   └── index.html
│   └── static/
│       ├── css/
│       │   └── styles.css
│       ├── js/
│       │   ├── script.js
│       │   ├── carousel.js
│       │   └── gallery.js
│       ├── images/        # Add your images here
│       └── videos/        # Add your videos here
├── hugo.toml              # Site configuration
└── public/                # Generated site (after build)
```

## 🎨 Adding Images

### Logo and Hero Background

Add these to `themes/rustyplough/static/images/`:
- `logo.png` - Team logo
- `hero-background.jpg` - Hero section background
- `rusty-plough-pub.png` - Sponsor logo (optional)

### Carousel Images

Add images to `themes/rustyplough/static/images/carousel/`:
- `slide1.jpg`
- `slide2.jpg`
- `slide3.jpg`

Then update `themes/rustyplough/layouts/index.html` to reference them.

### Match Photos

Add to `themes/rustyplough/static/images/matches/[match-name]/`:
- `photo1.jpg`
- `photo2.jpg`
- etc.

Update the match template or individual match pages to display them.

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Configure build settings:
   - **Build command**: `hugo`
   - **Build output directory**: `public`
   - **Environment variables**: `HUGO_VERSION = 0.119.0`
5. Deploy!

### Option 2: Netlify

1. Push to GitHub/GitLab
2. Go to [Netlify](https://netlify.com)
3. Connect repository
4. Build settings:
   - **Build command**: `hugo`
   - **Publish directory**: `public`
5. Deploy!

### Option 3: Manual Deploy

```bash
# Build the site
hugo

# Upload the public/ directory to your web host
```

## 📝 Blog Features

Your Hugo blog now has:

- ✅ **Dynamic blog posts** - Write in Markdown
- ✅ **Automatic listing** - Posts appear on /blog/ automatically
- ✅ **Individual post pages** - Each post gets its own URL
- ✅ **Metadata** - Author, date, reading time
- ✅ **Easy to update** - Just edit Markdown files
- ✅ **No database needed** - All static files

## 🎯 Customization

### Updating Site Title/Description

Edit `hugo.toml`:

```toml
title = 'Your Title'

[params]
  description = "Your description"
```

### Changing Colors

Edit `themes/rustyplough/static/css/styles.css`:

```css
:root {
    --primary-color: #000000;
    --secondary-color: #FFCC08;
    /* ... */
}
```

### Adding Menu Items

Edit `hugo.toml`:

```toml
[[menu.main]]
  name = "New Page"
  url = "/new-page/"
  weight = 4
```

## 📚 Hugo Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Markdown Guide](https://www.markdownguide.org/)

## 🎉 What's Included

- **4 blog posts** scraped from your old Wix site
- **Home page** with carousel
- **International Competitions** page
- **Match pages** with galleries
- **Responsive design** (mobile, tablet, desktop)
- **Black & yellow** team colors (#FFCC08)
- **Gallery components** for photos and videos
- **Lightbox viewer** for images/videos

## 💡 Tips

- **Write in Markdown** - It's easier than HTML
- **Use draft mode** - Set `draft: true` in frontmatter to hide posts
- **Preview locally** - Always test with `hugo server` before deploying
- **Commit often** - Use git to track changes
- **Optimize images** - Compress before adding to static/images/

## 🔧 Troubleshooting

**Hugo not found?**
```bash
brew install hugo
```

**Site not building?**
- Check `hugo.toml` syntax
- Ensure all Markdown files have valid frontmatter
- Run `hugo --verbose` to see errors

**Images not loading?**
- Check file paths (case-sensitive)
- Ensure images are in `themes/rustyplough/static/`
- Clear browser cache

## ⚽ RUST NEVER SLEEPS!
