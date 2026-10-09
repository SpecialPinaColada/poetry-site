// The one file a person edits to make this site theirs.
export default {
  /** Name shown in the header and the author in the copyright line */
  title: "I.AM.MAD",
  author: "I.AM.MAD",
  description: "Poems from I.AM.MAD",

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
  contentRepo: import.meta.env.CONTENT_REPO ?? "specialpinacolada/content-poems",
  contentBranch: import.meta.env.CONTENT_BRANCH ?? "main",
};
