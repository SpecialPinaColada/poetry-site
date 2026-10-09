import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// Server-rendered so poems are fetched on request and arrive as full HTML (good for SEO and link previews).
// Using Netlify or Vercel? Swap this adapter (@astrojs/netlify or @astrojs/vercel). Nothing else changes.
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
});
