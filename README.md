# Poetry site

Astro (server-rendered) site that fetches poems from a public GitHub repo on request.
Four themes, each with light and dark mode. No images.

## Set up

New poems appear within about 5 minutes of pushing (edge cache). Change the timing in the
`Cache-Control` header in the page files.

## Themes

`classic`, `terracotta`, `espresso` (dark brown, gold, centered), `sage`.
Colors for every theme and mode are at the top of `src/styles/global.css`.
