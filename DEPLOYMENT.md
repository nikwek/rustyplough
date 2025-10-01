# Deployment Guide - Cloudflare Pages

## 🚀 Quick Deploy to Cloudflare Pages

### Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - Hugo site for Rusty Plough FC"

# Create a new repository on GitHub
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/rustyplough.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub account and the `rustyplough` repository
4. Configure build settings:

**Build Configuration:**
```
Framework preset: Hugo
Build command: cd hugo-site && hugo --minify
Build output directory: hugo-site/public
Root directory: /
```

**Environment Variables:**
```
HUGO_VERSION = 0.119.0
```

5. Click **Save and Deploy**

### Step 3: Custom Domain (Optional)

After deployment:
1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Add your domain (e.g., `rustyploughfc.com`)
4. Follow DNS instructions

## 📝 What Gets Deployed

**Included:**
- ✅ Hugo site (`hugo-site/`)
- ✅ Images in Hugo (`hugo-site/themes/rustyplough/static/images/`)
- ✅ Videos in Hugo (`hugo-site/themes/rustyplough/static/videos/`)
- ✅ All blog posts and match pages

**Excluded (via .gitignore):**
- ❌ `files/` - Your 332 media files (too large for Git)
- ❌ `old-static-site/` - Backup files
- ❌ `hugo-site/public/` - Generated files
- ❌ `.DS_Store` and other system files

## 💡 Managing Large Media Files

Since `files/` is excluded from Git (332 files is too large), you have two options:

### Option 1: Copy Selected Files to Hugo (Recommended)
```bash
# Copy only the photos/videos you want to use
cp files/berlin-photo-1.jpg hugo-site/themes/rustyplough/static/images/matches/berlin-2025/
git add hugo-site/themes/rustyplough/static/images/
git commit -m "Add Berlin 2025 photos"
git push
```

### Option 2: Use External Storage
- Upload to Cloudflare Images or R2
- Reference external URLs in your content
- Keeps Git repository small

## 🔄 Updating Your Site

After making changes:

```bash
# Make your changes (add blog post, update content, etc.)

# Commit and push
git add .
git commit -m "Add new blog post"
git push

# Cloudflare automatically rebuilds and deploys!
```

## 🧪 Testing Before Deploy

Always test locally first:

```bash
cd hugo-site
hugo server --buildDrafts
# Visit http://localhost:1313
```

## 📊 Build Settings Summary

Copy these exact settings into Cloudflare Pages:

| Setting | Value |
|---------|-------|
| **Build command** | `cd hugo-site && hugo --minify` |
| **Build output directory** | `hugo-site/public` |
| **Root directory** | `/` |
| **Environment variable** | `HUGO_VERSION = 0.119.0` |

## 🆘 Troubleshooting

**Build fails?**
- Check Hugo version matches (0.119.0)
- Verify build command is correct
- Check Cloudflare build logs

**Images not loading?**
- Ensure images are in `hugo-site/themes/rustyplough/static/`
- Check file paths in templates
- Clear browser cache

**Site not updating?**
- Check GitHub push was successful
- Verify Cloudflare deployment completed
- May take 1-2 minutes to propagate

## 🎉 That's It!

Once set up, every `git push` automatically:
1. Triggers Cloudflare build
2. Runs Hugo
3. Deploys your site
4. Updates your domain

**Free, fast, and automatic!** ⚡
