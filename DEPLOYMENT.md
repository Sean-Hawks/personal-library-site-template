# Deployment Guide: GitHub Pages and Custom Domains

## Key Idea

GitHub Pages serves static files. It does not run `npm install`, `npm run build`, or a Next.js server for you.

For this template, the correct flow is:

- Build the site with GitHub Actions
- Export static files into `out/`
- Deploy the generated output to GitHub Pages

## GitHub Pages

1. Open your repository on GitHub.
2. Go to `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main`.
5. Check the `Actions` tab and wait for the build and deploy workflow to finish.

## Next.js Static Export

This template uses the Next.js App Router with static export:

- `next.config.ts` sets `output: "export"`
- `next build` generates the `out/` directory
- `trailingSlash: true` keeps folder-style routes stable on Pages
- `images.unoptimized: true` avoids server-side image optimization, which GitHub Pages cannot run

## Custom Domain

If you use a custom domain such as `your-site.example`:

1. Open `Settings -> Pages`.
2. Add `your-site.example` as the custom domain.
3. Enable `Enforce HTTPS`.
4. Create `public/CNAME` with this content:

```text
your-site.example
```

For an apex domain, point these A records to GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.your-site.example`, add this CNAME:

```text
www -> your-github.github.io
```

DNS updates can take a few minutes or several hours.

## Subpath Deployment

If you deploy to a project URL like:

```text
https://your-github.github.io/personal-library-site-template/
```

the GitHub Actions workflow automatically reads `GITHUB_REPOSITORY` and builds with the correct `basePath` and `assetPrefix`.

If you deploy with a custom domain, set this repository variable in GitHub:

```text
DEPLOY_TARGET=custom-domain
```

That keeps the build at the domain root instead of under `/<repo>/`.

## Checklist

- [ ] `npm run lint` passes locally
- [ ] `npm run build` passes locally
- [ ] GitHub Actions build is green
- [ ] GitHub Pages shows the site URL
- [ ] Custom domain is verified, if used
- [ ] HTTPS is enabled
