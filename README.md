# National Estate & Construction - Static Website

This is a purely static HTML, CSS, and JavaScript website for National Estate & Construction. It has been converted from a React/Vite application to ensure compatibility with GitHub Pages without requiring any build steps.

## Project Structure

```
/
├── index.html          # Home page (entry point)
├── about.html          # About Us page
├── services.html       # Services page
├── projects.html       # Projects portfolio page
├── why-choose-us.html  # Why Choose Us page
├── testimonials.html   # Testimonials page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Custom styles (if any)
├── js/
│   └── main.js         # Custom JavaScript functionality
├── assets/
│   ├── images/         # Static images
│   └── icons/          # Static icons
└── README.md           # Project documentation
```

## Technical Details

- **No Build Step:** This project uses pure HTML, CSS, and JavaScript. There is no Node.js, Vite, or React build process required.
- **Tailwind CSS:** Tailwind CSS is included via CDN (`https://cdn.tailwindcss.com`) in the `<head>` of each HTML file. Custom configuration is provided inline via a `<script>` tag.
- **Relative Paths:** All links to CSS, JS, images, and other HTML pages use relative paths (e.g., `./about.html`, `./css/styles.css`) to ensure the site works correctly when served from a subdirectory on GitHub Pages.
- **Icons & Fonts:** Google Fonts (Inter) and Material Symbols Outlined are included via CDN links in the HTML `<head>`.

## Local Development

To view the site locally, you can use any static file server.

If you have Node.js installed, you can use the `serve` package:

```bash
npx serve .
```

Alternatively, you can use Python's built-in HTTP server:

```bash
python3 -m http.server
```

Or simply open `index.html` directly in your web browser.

## Deployment to GitHub Pages

This site is ready to be deployed directly to GitHub Pages.

1. Push the code to a GitHub repository.
2. Go to the repository's **Settings** tab.
3. Navigate to **Pages** in the left sidebar.
4. Under **Build and deployment**, select **Deploy from a branch** as the source.
5. Under **Branch**, select `main` (or your default branch) and the `/ (root)` folder.
6. Click **Save**.

GitHub Pages will automatically serve the static files. No additional configuration or GitHub Actions workflows are required.
