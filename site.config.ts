// The one file a person edits to make this site theirs.
export default {
  /** Name shown in the header and the copyright line */
  title: "Your Name",
  author: "Your Name",
  description: "Poems by Your Name.",

  /** Your live site URL, used for canonical links and the RSS feed. Leave "" while developing. */
  url: "",

  /**
   * "classic"    white page, teal accent, left-aligned
   * "terracotta" cream page, clay accent, left-aligned
   * "espresso"   dark brown page, gold accent, centered
   * "sage"       soft green page, left-aligned
   */
  theme: "classic" as "classic" | "terracotta" | "espresso" | "sage",

  /** "system" follows the visitor's device. Visitors can override it from the menu. */
  colorMode: "system" as "system" | "light" | "dark",

  /** Public GitHub repo holding poems/*.md and index.json */
  contentRepo: import.meta.env.CONTENT_REPO ?? "your-username/poems",
  contentBranch: import.meta.env.CONTENT_BRANCH ?? "main",
};
