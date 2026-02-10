# Thinkies.org

Website for Thinkies World Conferences - showcasing creative thinking patterns and insights from the community.

## 🏗️ Project Structure

```
thinkies.org/
├── src/
│   ├── app.html                    # HTML template for the app
│   ├── app.css                     # Global styles (Tailwind + DaisyUI)
│   ├── lib/
│   │   └── components/             # Reusable Svelte components
│   │       ├── InsightsList.svelte # Display thinkie insights
│   │       ├── SearchBar.svelte    # Search interface
│   │       └── SearchResults.svelte # Search results display
│   └── routes/                     # SvelteKit file-based routing
│       ├── +layout.svelte          # Root layout (imports global CSS)
│       ├── +layout.js              # Layout config (prerender, trailing slash)
│       ├── +page.svelte            # Home page (/)
│       └── conferences/
│           └── [slug]/             # Dynamic conference routes
│               ├── +page.js        # SSG data loader
│               └── +page.svelte    # Conference page template
│
├── static/                         # Static assets (copied to dist/ on build)
│   ├── .nojekyll                   # GitHub Pages compatibility file
│   ├── CNAME                       # Custom domain configuration
│   ├── privacy.html                # Privacy policy page
│   ├── code_of_conduct.html        # Code of conduct page
│   └── conferences/
│       └── twc-1/                  # Conference-specific assets
│           ├── data.json           # Conference data (thinkies & insights)
│           ├── images/             # Thinkie card images
│           └── pdf/                # Miro board PDFs
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline
│
├── dist/                           # Build output (generated, not in git)
├── node_modules/                   # Dependencies (generated, not in git)
├── .svelte-kit/                    # SvelteKit cache (generated, not in git)
│
├── package.json                    # Dependencies and scripts
├── svelte.config.js                # SvelteKit configuration
├── vite.config.js                  # Vite bundler configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── jsconfig.json                   # JavaScript/TypeScript configuration
```

## 📚 Technologies Used

### Core Framework
- **[SvelteKit](https://kit.svelte.dev/)** (v2.50+) - Web application framework with SSR/SSG
- **[Svelte](https://svelte.dev/)** (v5.50+) - Reactive UI framework
- **[@sveltejs/adapter-static](https://kit.svelte.dev/docs/adapter-static)** - Static site generation for GitHub Pages

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4) - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** (v5.5) - Tailwind component library

### Build Tools
- **[Vite](https://vitejs.dev/)** (v5.0) - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

### Utilities
- **[he](https://www.npmjs.com/package/he)** - HTML entity encoding/decoding

### Analytics
- **[Fathom Analytics](https://usefathom.com/)** - Privacy-focused analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/thinkies.org.git
cd thinkies.org

# Install dependencies
npm install
```

### Development

```bash
# Start development server at http://localhost:5173
npm run dev
```

The dev server supports:
- Hot Module Replacement (HMR)
- Instant page updates
- Error overlay

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Build output goes to `dist/` folder.

## 📝 Adding a New Conference (e.g., TWC-II)

### Step 1: Prepare Conference Data

Create a new folder in `static/conferences/` with your conference slug:

```bash
mkdir -p static/conferences/twc-2
```

### Step 2: Add Conference Assets

```
static/conferences/twc-2/
├── data.json           # Conference data (see format below)
├── images/             # Thinkie card images (JPG/PNG)
└── pdf/                # Miro board PDFs
```

#### Data Format (`data.json`)

```json
{
  "thinkies": [
    {
      "title": "Thinkie Name",
      "scenario": "Description of when to use this thinkie...",
      "card_image": "thinkie-name.jpg",
      "insights": [
        "First insight from the conference",
        "Second insight from the conference",
        "..."
      ]
    }
  ]
}
```

**Important**: The PDF filename must match the card image filename with `.pdf` extension:
- Image: `thinkie-name.jpg` → PDF: `thinkie-name.pdf`
- Image: `another-thinkie.png` → PDF: `another-thinkie.pdf`

### Step 3: Register the Route

Edit `src/routes/conferences/[slug]/+page.js` and add your conference slug to the `entries()` function:

```javascript
export function entries() {
  return [
    { slug: 'twc-1' },
    { slug: 'twc-2' },  // ← Add this line
    // Add more conferences here
  ];
}
```

### Step 4: Add Conference Card to Home Page

Edit `src/routes/+page.svelte` and add a new card in the "Conferences Section":

```svelte
<!-- Existing TWC I card -->
<div class="card bg-base-100 border-2 border-accent-blue w-full max-w-md">
  <div class="card-body items-center text-center">
    <h3 class="card-title text-2xl text-primary">TWC I</h3>
    <p class="text-neutral">June 4th, 2025</p>
    <p>12 Thinkies discussed, dozens of insights collected</p>
    <div class="card-actions mt-4">
      <button class="btn-coral" on:click={() => goto('/conferences/twc-1/')}>
        View Conference Results
      </button>
    </div>
  </div>
</div>

<!-- NEW TWC II card -->
<div class="card bg-base-100 border-2 border-accent-blue w-full max-w-md">
  <div class="card-body items-center text-center">
    <h3 class="card-title text-2xl text-primary">TWC II</h3>
    <p class="text-neutral">Your Conference Date</p>
    <p>X Thinkies discussed, Y insights collected</p>
    <div class="card-actions mt-4">
      <button class="btn-coral" on:click={() => goto('/conferences/twc-2/')}>
        View Conference Results
      </button>
    </div>
  </div>
</div>
```

### Step 5: Build and Deploy

```bash
# Build the site
npm run build

# Test locally
npm run preview

# Deploy (push to GitHub)
git add .
git commit -m "Add TWC-II conference"
git push origin main
```

GitHub Actions will automatically build and deploy to GitHub Pages.

## 🌐 Deployment

### GitHub Pages

The site deploys automatically via GitHub Actions on every push to `main` branch.

**Workflow**: `.github/workflows/deploy.yml`

The workflow:
1. Checks out code
2. Installs dependencies
3. Builds the site (`npm run build`)
4. Uploads artifacts
5. Deploys to GitHub Pages

### Custom Domain

The `CNAME` file in `static/` configures the custom domain. Current domain: `thinkies.org`

### URLs After Deployment

- Home: `https://thinkies.org/`
- TWC-I: `https://thinkies.org/conferences/twc-1/`
- TWC-II: `https://thinkies.org/conferences/twc-2/`
- 404 Page: Auto-generated by SvelteKit

## 🔧 Configuration Files

### `svelte.config.js`
SvelteKit configuration with adapter-static settings:
- Output directory: `dist/`
- Fallback: `404.html` for GitHub Pages SPA routing
- Prerendering: Enabled for all routes

### `vite.config.js`
Vite bundler configuration with SvelteKit plugin.

### `tailwind.config.js`
Tailwind CSS configuration:
- Content paths for Svelte files
- DaisyUI plugin with custom theme "thinkies"
- Custom colors and styling

## 📖 Development Tips

### File-Based Routing

SvelteKit uses file-based routing:
- `src/routes/+page.svelte` → `/`
- `src/routes/about/+page.svelte` → `/about/`
- `src/routes/conferences/[slug]/+page.svelte` → `/conferences/*/`

### Data Loading

The `+page.js` files export a `load` function that runs:
- At build time (SSG) for static sites
- On the server (SSR) for dynamic sites
- In the browser for client-side navigation

### Component Imports

Use the `$lib` alias to import components:
```javascript
import MyComponent from '$lib/components/MyComponent.svelte';
```

### Static Assets

Files in `static/` are copied as-is to `dist/`:
- `static/image.png` → `https://thinkies.org/image.png`
- Reference in code: `/image.png` (leading slash)

## 🐛 Troubleshooting

### Build fails with "Conference not found"
- Check that `data.json` exists in `static/conferences/{slug}/`
- Verify the slug is added to `entries()` in `+page.js`

### Images not loading
- Ensure images are in `static/conferences/{slug}/images/`
- Check that `card_image` in `data.json` matches the filename
- Use leading slash in paths: `/conferences/twc-1/images/card.jpg`

### PDF links broken
- Ensure PDFs are in `static/conferences/{slug}/pdf/`
- PDF filename must match image filename with `.pdf` extension
- Example: `easy-bit.jpg` → `easy-bit.pdf`

### GitHub Pages shows 404
- Check that `.nojekyll` file exists in `static/`
- Verify `fallback: '404.html'` in `svelte.config.js`
- Ensure GitHub Pages is enabled in repository settings

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run build && npm run preview`
5. Submit a pull request

## 📞 Support

- **Code of Conduct**: [code_of_conduct.html](https://thinkies.org/code_of_conduct.html)
- **Privacy Policy**: [privacy.html](https://thinkies.org/privacy.html)
- **Thinkies by Kent Beck**: [https://tidyfirst.substack.com/s/thinkies](https://tidyfirst.substack.com/s/thinkies)

---

Made with ❤️ for the Thinkies community
