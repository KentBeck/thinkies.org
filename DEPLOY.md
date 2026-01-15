# GitHub Pages Deploy Guide

## Quick Start

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Thinkies World Conference I website"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `twc_website`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 3. Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/twc_website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save

### 5. Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- You can monitor the progress in the **Actions** tab of your repository
- First deployment takes ~2-3 minutes

### 6. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/twc_website/
```

## Updating the Site

Every time you push to the `main` branch, the site will automatically rebuild and redeploy:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings > Pages**
2. Add your custom domain under **Custom domain**
3. Follow GitHub's instructions to configure DNS

## Troubleshooting

### Build Fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Site Not Loading
- Verify GitHub Pages is enabled in Settings
- Check that the source is set to **GitHub Actions**
- Wait a few minutes after first push

### Assets Not Loading
- Images and data are in the `public` folder
- They're automatically copied to `dist` during build
- Check browser console for 404 errors

## Testing Locally Before Deploy

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

Visit http://localhost:4173 to see the production version locally.

## Project Status

✅ Vite configured for GitHub Pages
✅ GitHub Actions workflow created
✅ Build tested successfully
✅ Assets properly organized
✅ Ready for deployment!
