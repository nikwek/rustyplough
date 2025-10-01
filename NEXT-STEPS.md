# Next Steps - Deploy to GitHub & Cloudflare

## ✅ What's Done

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Hugo site ready to deploy
- ✅ `.gitignore` configured (excludes `/files` and `/old-static-site`)

## 🚀 Deploy Now (3 Steps)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `rustyplough` (or any name)
3. **Don't** initialize with README (we already have one)
4. Click **Create repository**

### Step 2: Push to GitHub

Copy the commands from GitHub, or use these:

```bash
# Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/rustyplough.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your `rustyplough` repository
4. **Configure build settings:**

```
Build command: cd hugo-site && hugo --minify
Build output directory: hugo-site/public
Environment variable: HUGO_VERSION = 0.119.0
```

5. Click **Save and Deploy**

**Done!** Your site will be live in ~2 minutes at a Cloudflare URL.

## 📝 Adding Content Later

### Add a Blog Post

```bash
cd hugo-site
hugo new content/blog/my-new-post.md
# Edit the file
git add .
git commit -m "Add new blog post"
git push
# Cloudflare auto-deploys!
```

### Add Match Photos

```bash
# Copy photos from /files
cp files/berlin-photo-1.jpg hugo-site/themes/rustyplough/static/images/matches/berlin-2025/

# Commit and push
git add hugo-site/themes/rustyplough/static/images/
git commit -m "Add Berlin 2025 photos"
git push
```

## 📚 Documentation

- **DEPLOYMENT.md** - Complete deployment guide
- **hugo-site/README.md** - Hugo site documentation
- **hugo-site/MIGRATION-GUIDE.md** - What changed from static site

## 💡 Tips

- **Test locally first:** `cd hugo-site && hugo server`
- **Small commits:** Commit often with clear messages
- **Selective media:** Only add photos you need (keeps repo small)
- **Auto-deploy:** Every `git push` triggers Cloudflare rebuild

## 🎯 Your Workflow

```bash
# 1. Make changes
cd hugo-site
hugo new content/blog/match-report.md
# Edit content...

# 2. Test locally
hugo server
# Check http://localhost:1313

# 3. Deploy
git add .
git commit -m "Add match report"
git push
# Cloudflare deploys automatically!
```

## ⚽ Ready to Deploy!

Your site is ready. Just follow the 3 steps above to get it live on Cloudflare Pages!
