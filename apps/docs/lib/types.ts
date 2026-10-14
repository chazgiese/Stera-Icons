export interface VariantInfo {
  version: string;
  componentName: string;
  fileName: string;
}

// The fields the client components read. The home page serializes one of these
// per icon into its RSC payload, so keep it to what the grid and drawer use
export interface IconEntry {
  name: string;
  kebabName: string;
  tags: string[];
  // Category ids from categories.json, primary first
  categories: string[];
  variants: Record<string, Pick<VariantInfo, "componentName">>;
}

// One entry of packages/icons/categories.json, copied to data/categories.json
export interface IconCategory {
  id: string;
  title: string;
  description: string;
  // Kebab name of the icon that represents the category
  icon: string;
}

export interface IconData extends IconEntry {
  componentName: string;
  weights: string[];
  supportsDuotone: boolean;
  variants: Record<string, VariantInfo>;
}
