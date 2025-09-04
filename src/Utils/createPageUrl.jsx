// src/utils.js

/**
 * Generate a URL path for a given page name.
 * Converts names like "Home" → "/home"
 * and "About Me" → "/about-me".
 */
export function createPageUrl(pageName) {
  if (!pageName) return "/";
  return "/" + pageName.toLowerCase().replace(/\s+/g, "-");
}
