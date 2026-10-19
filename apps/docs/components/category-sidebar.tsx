"use client";

import type { IconCategory } from "@/lib/types";
import { categoryLabel } from "@/lib/category-label";
import type { IconWeight } from "@/utils/iconCodeSnippets";
import { IconRenderer } from "@/components/icon-renderer";
import { useActiveSection, useScrollSpyRegistry } from "@/components/scroll-spy";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface CategorySidebarProps {
  categories: IconCategory[];
  // Matches per category id for the current search
  counts: Record<string, number>;
  weight: IconWeight;
  duotone: boolean;
}

// Desktop-only category navigation. Full viewport height and scrolls on its
// own. It is pulled up under the navbar so the list scrolls beneath it like the
// grid does: the navbar's gradient fades the top edge and only the bottom edge
// needs a scroll-fade mask
export function CategorySidebar({ categories, counts, weight, duotone }: CategorySidebarProps) {
  const activeId = useActiveSection();
  const { setActiveFromClick } = useScrollSpyRegistry();

  return (
    <aside className="sticky top-0 -mt-navbar hidden h-svh shrink-0 md:block">
      <Sidebar collapsible="none" className="h-full bg-transparent">
        <SidebarContent className="scroll-fade-b scroll-pt-navbar pt-navbar pb-4">
          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categories.map((category) => {
                  const count = counts[category.id] ?? 0;
                  const disabled = count === 0;
                  return (
                    <SidebarMenuItem key={category.id}>
                      <SidebarMenuButton
                        isActive={activeId === category.id}
                        aria-disabled={disabled || undefined}
                        tabIndex={disabled ? -1 : undefined}
                        render={
                          <a
                            href={`#${category.id}`}
                            onClick={() => setActiveFromClick(category.id)}
                          />
                        }
                      >
                        <IconRenderer iconName={category.icon} weight={weight} duotone={duotone} />
                        <span className="w-full">{categoryLabel(category.id)}</span>
                        <SidebarMenuBadge className="pr-1">{count}</SidebarMenuBadge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </aside>
  );
}
