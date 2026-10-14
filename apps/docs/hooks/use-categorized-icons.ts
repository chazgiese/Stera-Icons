import { useMemo } from "react";
import type { IconCategory, IconEntry } from "@/lib/types";

export interface CategorySection {
  category: IconCategory;
  icons: IconEntry[];
}

export interface CategorizedIcons {
  // Non-empty sections, in categories.json order
  sections: CategorySection[];
  // Matches per category id, including zeros, so the sidebar list stays stable
  counts: Record<string, number>;
  total: number;
}

interface SearchableIcon {
  icon: IconEntry;
  text: string;
}

interface CategoryGroup {
  category: IconCategory;
  all: IconEntry[];
  searchable: SearchableIcon[];
}

// Groups icons by their primary category once, then filters each group by the
// query. One memoized result feeds both the sidebar counts and the grid
export function useCategorizedIcons(
  icons: IconEntry[],
  categories: IconCategory[],
  query: string
): CategorizedIcons {
  // Grouping and lowercasing happen once per icon set, not per keystroke
  const groups = useMemo<CategoryGroup[]>(() => {
    const byId = new Map<string, CategoryGroup>();
    for (const category of categories) {
      byId.set(category.id, { category, all: [], searchable: [] });
    }
    for (const icon of icons) {
      const group = byId.get(icon.categories[0]);
      if (!group) {
        // The icon build rejects this, so it only happens with stale data
        if (process.env.NODE_ENV !== "production") {
          console.warn(`Icon "${icon.kebabName}" has no known primary category`);
        }
        continue;
      }
      group.all.push(icon);
      group.searchable.push({
        icon,
        text: [icon.kebabName, ...icon.tags].join("\n").toLowerCase(),
      });
    }
    return Array.from(byId.values());
  }, [icons, categories]);

  return useMemo(() => {
    const q = query.trim().toLowerCase();
    const sections: CategorySection[] = [];
    const counts: Record<string, number> = {};
    let total = 0;

    for (const group of groups) {
      // With no query, reuse the precomputed arrays so memoized sections bail out
      const matches = q
        ? group.searchable.filter(({ text }) => text.includes(q)).map(({ icon }) => icon)
        : group.all;
      counts[group.category.id] = matches.length;
      total += matches.length;
      if (matches.length > 0) {
        sections.push({ category: group.category, icons: matches });
      }
    }

    return { sections, counts, total };
  }, [groups, query]);
}
