<p align="center">
  <br>
  <img src="public/assets/img/Abhishek.jpeg" width="150" style="border-radius:50%;"/>
</p>

<div align="center">
<h1 style="margin-bottom:-10px;">Abhishek Kumar — Portfolio</h1>
Personal portfolio, publications, and research blog — built with Next.js and TailwindCSS.
<br>
<a href="https://abhisheka456.github.io/home/">abhisheka456.github.io/home</a>
</div>

## Features

- 🎓 **Academic CV** — experience, education, skills, awards & certifications
- 📄 **Publications** — peer-reviewed research papers with full list
- 📝 **Blog** — research summaries written from published work
- 🌙 **Dark theme** — TailwindCSS with nightwind
- 📱 **Mobile friendly** — responsive layout with sidebar
- 🗂️ **Downloadable resume** — one-click PDF download
- ⚙️ **Static export + GitHub Pages** — auto-deployed by GitHub Actions

## Tech Stack

- [Next.js](https://nextjs.org/) (Pages Router, static export)
- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) with [nightwind](https://github.com/jjcoffes/nightwind) dark mode
- [react-icons](https://react-icons.github.io/react-icons/)
- Deployed to [GitHub Pages](https://pages.github.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/abhisheka456/home
```

Go to the project directory

```bash
  cd home
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create a production static export (outputs to `out/`):

```bash
  npm run build
```

## Deployment

The site is deployed to GitHub Pages at `https://abhisheka456.github.io/home/` via the
GitHub Actions workflow in `.github/workflows/nextjs.yml`. Every push to the `main`
branch builds the site, injects the Pages base path into `next.config.js`, and
deploys automatically. No manual steps required.

> Because the site is served under the repo's `/home` path, asset URLs (avatar, resume)
> go through the `lib/asset.ts` helper which prefixes them with the configured base path.

## License

This project is open source and available under the [MIT license](https://choosealicense.com/licenses/mit/).