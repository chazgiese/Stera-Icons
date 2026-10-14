// Ids that are initialisms rather than words
const UPPERCASE_IDS = new Set(["ai"]);

// The category id is the name the icon export and the Figma library use
// ("interface", "files"), so the docs display it rather than the longer
// `title` in categories.json
export function categoryLabel(id: string): string {
  if (UPPERCASE_IDS.has(id)) return id.toUpperCase();
  return id.charAt(0).toUpperCase() + id.slice(1);
}
