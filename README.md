# Thinkies World Conference I

A website showcasing thinkies from the Thinkies World Conference I, held on June 4th, 2025.

## About

Thinkies are thinking tools for software development created by Kent Beck. This site displays 12 thinkies discussed at the conference, with a total of collected insights.

## Features

- 📚 Browse 12 different thinkies with 3D hover effects
- 🔍 Full-text search across titles, scenarios, and insights
- 📖 Detailed view of each thinkie with its insights
- 📱 Fully responsive design

## Technologies

- [Svelte](https://svelte.dev/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages.

### Setup Instructions

1. **Create a GitHub repository** for this project

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **GitHub Actions**

4. **Automatic Deployment:**
   - The site will automatically build and deploy when you push to the `main` branch
   - The workflow is defined in `.github/workflows/deploy.yml`
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual Build

If you want to build and deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# You can deploy the contents of 'dist' to any static hosting service
```

## Project Structure

```
twc_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── data/
│   │   └── twc1_data.json     # Thinkies data
│   └── assets/
│       └── images/             # Thinkie card images
├── src/
│   ├── App.svelte             # Main application component
│   ├── InsightsList.svelte    # Component for displaying insights
│   ├── SearchBar.svelte       # Search input component
│   ├── SearchResults.svelte   # Search results component
│   ├── main.js                # Application entry point
│   └── app.css                # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Credits

Thinkies were created by Kent Beck. Learn more at: https://tidyfirst.substack.com/s/thinkies

## License

This project is open source and available under the MIT License.
