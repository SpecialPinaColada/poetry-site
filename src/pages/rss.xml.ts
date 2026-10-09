import type { APIRoute } from "astro";
import config from "../../site.config";
import { getIndex } from "../lib/content";

export const prerender = false;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ url }) => {
  const origin = config.url || url.origin;
  const poems = await getIndex();
  const items = poems
    .map((p) => {
      const date = p.date && !isNaN(Date.parse(p.date)) ? `<pubDate>${new Date(p.date).toUTCString()}</pubDate>` : "";
      return `<item><title>${esc(p.title)}</title><link>${origin}/poems/${p.slug}</link><guid>${origin}/poems/${p.slug}</guid>${date}<description>${esc(p.excerpt)}</description></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(config.title)}</title><link>${origin}</link><description>${esc(config.description)}</description>${items}</channel></rss>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=86400",
    },
  });
};
