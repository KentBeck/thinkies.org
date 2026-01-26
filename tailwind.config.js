export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        thinkies: {
          // Coral + Facebook blue palette
          "primary": "#1877F2",           // Facebook blue
          "primary-content": "#ffffff",
          "secondary": "#4a5568",         // Neutral gray
          "secondary-content": "#ffffff",
          "accent": "#FD5353",            // Coral (immutable)
          "accent-content": "#ffffff",
          "neutral": "#2d3748",           // Dark gray - footer
          "neutral-content": "#f7fafc",
          "base-100": "#ffffff",          // White
          "base-200": "#f7fafc",          // Off-white
          "base-300": "#edf2f7",          // Light gray
          "base-content": "#1a202c",      // Dark text
          "info": "#1877F2",              // Facebook blue
          "success": "#1877F2",           // Facebook blue (instead of green)
          "warning": "#f59e0b",           // Amber
          "error": "#dc2626",             // Red

          // Borders and spacing
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
}
