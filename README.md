# Poetry site

Astro (server-rendered) site that fetches poems from a public GitHub repo on request.
Four themes, each with light and dark mode. No images.

## Set up

1. Create a public GitHub repo from the files in `content-repo-template/` (keep the `.github` folder).
   In its Settings → Actions → General, allow workflows read and write permission.
2. In `site.config.ts`, set `title`, `author`, `contentRepo` ("you/your-repo") and `theme`.
3. `pnpm install` then `pnpm dev`. (No pnpm? Run `corepack enable` first.)
4. Deploy: connect this repo to Cloudflare Pages (build command `pnpm build`, output directory `dist`; it detects pnpm from `pnpm-lock.yaml`, which `pnpm install` creates, so commit it).
   For Netlify or Vercel, swap the adapter in `astro.config.mjs`.

New poems appear within about 5 minutes of pushing (edge cache). Change the timing in the
`Cache-Control` header in the page files.

## Themes

`classic`, `terracotta`, `espresso` (dark brown, gold, centered), `sage`.
Colors for every theme and mode are at the top of `src/styles/global.css`.
