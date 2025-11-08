# Portfolio 2025

This is a portfolio website built with React + Vite.

## Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages with custom domain support.

### Automated Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Prerequisites:**
1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source

The workflow will automatically:
- Build the project
- Deploy to GitHub Pages
- Make it available at `https://yourdomain.com` (if custom domain is configured) or `https://venablena.github.io/portfolio-25/`

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### Custom Domain Setup

To use a custom domain:

1. Update the `public/CNAME` file with your custom domain (e.g., `yourdomain.com`)
2. In your GitHub repository, go to Settings → Pages
3. Under "Custom domain", enter your domain name
4. Configure your domain's DNS settings:
   - For an apex domain (example.com), add A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For a subdomain (www.example.com), add a CNAME record pointing to `<username>.github.io`
5. Wait for DNS propagation (can take up to 24-48 hours)
6. Enable "Enforce HTTPS" in GitHub Pages settings (recommended)

For more details, see [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
