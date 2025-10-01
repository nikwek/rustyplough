# Migration from Static HTML to Hugo

## ✅ What's Been Converted

### Pages
- ✅ **Home page** - Fully converted with carousel
- ✅ **International Competitions** - All GIFE matches
- ✅ **Blog** - Now dynamic with 4 posts from your Wix site
- ✅ **Match pages** - Template created for individual matches

### Blog Posts (Scraped from Wix)
1. **Ploughed and Proud - A Podcast** (Feb 11, 2025)
2. **AFC Roma 2:3 Ploughed Under** (Jan 12, 2025)
3. **Clayton Wanderers 2:0 Rusty Plough** (Nov 5, 2024)
4. **Africari Big Time 2:11 Rusty Plough FC** (Oct 15, 2024)

### Design & Features
- ✅ Black & yellow (#FFCC08) color scheme
- ✅ Responsive navigation
- ✅ Carousel component
- ✅ Gallery component with lightbox
- ✅ Match card layout (3-column: Team | Score | Team)
- ✅ All CSS and JavaScript

## 📂 File Structure Comparison

### Old (Static HTML)
```
rustyplough/
├── index.html
├── international.html
├── blog.html
├── matches/
│   └── gife-berlin-2025.html
├── styles.css
├── script.js
├── carousel.js
└── gallery.js
```

### New (Hugo)
```
hugo-site/
├── content/
│   ├── blog/              # Markdown files for blog posts
│   ├── matches/           # Markdown files for matches
│   └── international.md
├── themes/rustyplough/
│   ├── layouts/           # HTML templates
│   └── static/            # CSS, JS, images
└── hugo.toml              # Configuration
```

## 🎯 Key Differences

### 1. Blog Posts

**Old Way (Static):**
```html
<!-- Edit blog.html manually -->
<article class="blog-card">
    <h2>Post Title</h2>
    <p>Content...</p>
</article>
```

**New Way (Hugo):**
```markdown
<!-- Create content/blog/post-name.md -->
---
title: "Post Title"
date: 2025-01-15
author: "Your Name"
---

Content in Markdown...
```

Hugo automatically:
- Creates the blog listing page
- Generates individual post pages
- Sorts by date
- Adds metadata

### 2. Match Pages

**Old Way:**
- Copy HTML file for each match
- Update all HTML manually

**New Way:**
- Create one Markdown file per match
- Hugo uses template to generate page
- Just fill in frontmatter and content

### 3. Images

**Old Way:**
```html
<img src="images/photo.jpg">
```

**New Way:**
```html
<img src="{{ "images/photo.jpg" | relURL }}">
```

Hugo handles URL generation automatically.

## 🚀 Workflow Changes

### Adding a Blog Post

**Before:**
1. Open `blog.html`
2. Copy/paste HTML structure
3. Edit content
4. Save and deploy

**After:**
1. Run `hugo new content/blog/my-post.md`
2. Edit Markdown file
3. Save (Hugo auto-rebuilds)
4. Deploy

### Deploying

**Before:**
- Upload HTML files directly

**After:**
1. Run `hugo` to build
2. Deploy `public/` folder
3. Or use Cloudflare/Netlify auto-deploy from Git

## 💡 Benefits of Hugo

### For You
- ✅ **Write in Markdown** - Easier than HTML
- ✅ **No repetitive HTML** - Templates handle structure
- ✅ **Automatic blog listing** - Posts appear automatically
- ✅ **Fast builds** - Hugo is incredibly fast
- ✅ **Version control friendly** - Markdown works great with Git

### For the Site
- ✅ **Still static** - No server/database needed
- ✅ **Still fast** - Pure HTML/CSS/JS output
- ✅ **Still free hosting** - Cloudflare Pages/Netlify
- ✅ **Better organized** - Content separate from templates

## 📝 Next Steps

### 1. Add Your Images

Copy images from old site:
```bash
cp -r ../images themes/rustyplough/static/
cp -r ../videos themes/rustyplough/static/
```

### 2. Test Locally

```bash
cd hugo-site
hugo server
# Visit http://localhost:1313
```

### 3. Create More Match Pages

```bash
hugo new content/matches/gife-sydney-2023.md
```

Edit the file with match details.

### 4. Write New Blog Posts

```bash
hugo new content/blog/latest-match-report.md
```

Write in Markdown, save, and it appears on the blog!

### 5. Deploy

Push to GitHub and connect to Cloudflare Pages:
- Build command: `hugo`
- Build output: `public`
- Environment: `HUGO_VERSION=0.119.0`

## 🔄 Keeping Both Sites

You can keep both directories:
- `rustyplough/` - Old static site (backup)
- `rustyplough/hugo-site/` - New Hugo site (active)

Once you're happy with Hugo, you can archive the old site.

## 🆘 Common Questions

**Q: Can I still edit HTML directly?**
A: Yes! Hugo templates are HTML. Edit `themes/rustyplough/layouts/`

**Q: What if I don't like Hugo?**
A: Your old static site still works. Hugo just makes blogging easier.

**Q: Do I need to learn Markdown?**
A: Basic Markdown is very simple:
- `# Heading`
- `**bold**`
- `*italic*`
- `[link](url)`
- `![image](path)`

**Q: Can I preview before deploying?**
A: Yes! `hugo server` shows live preview at localhost:1313

**Q: How do I update the design?**
A: Edit `themes/rustyplough/static/css/styles.css` (same as before)

## 🎉 You're All Set!

Your Hugo site is ready with:
- Dynamic blog system
- All your existing content
- Same design and features
- Easier content management

Check the browser preview to see it in action!
