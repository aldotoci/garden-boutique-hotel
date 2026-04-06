import { IG_EMBED_HTML_TEMPLATE } from "./instagramEmbedTemplate";

/**
 * Instagram oEmbed-style permalinks (Garden Boutique Hotel).
 * Full blockquote skeleton matches Instagram’s embed snippet (no data-instgrm-captioned).
 */
export const INSTAGRAM_HOME_EMBED_PERMALINKS = [
  "https://www.instagram.com/reel/DWedgQ8jHrP/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/p/DWMjdRgjFoo/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/p/DSseHIVDGgx/?utm_source=ig_embed&utm_campaign=loading",
] as const;

const IG_URL_TOKEN = "%%IG_EMBED_URL%%";

/** Full Instagram embed markup (placeholder UI + links); embed.js replaces on load. */
export function instagramBlockquoteHtml(permalink: string): string {
  const esc = permalink.replace(/&/g, "&amp;");
  return IG_EMBED_HTML_TEMPLATE.split(IG_URL_TOKEN).join(esc);
}
