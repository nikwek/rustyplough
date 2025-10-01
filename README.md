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

```bash
cd hugo-site
hugo new content/blog/my-post.md
# Edit the file with your content
```

### Adding Match Pages

```bash
cd hugo-site
hugo new content/matches/match-name.md
# Edit with match details and photos
```

### Adding Images

Copy images to `hugo-site/themes/rustyplough/static/images/`

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
