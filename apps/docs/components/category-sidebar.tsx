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

// Desktop-only category navigation. Sticky below the navbar and scrolls on
// its own; the page keeps scrolling behind the nav as before
export function CategorySidebar({ categories, counts, weight, duotone }: CategorySidebarProps) {
  const activeId = useActiveSection();
  const { setActiveFromClick } = useScrollSpyRegistry();

  return (
    <aside className="sticky top-navbar hidden h-[calc(100svh-var(--spacing-navbar))] shrink-0 md:block">
      <Sidebar collapsible="none" className="h-full bg-transparent">
        <SidebarContent className="scroll-fade-y pb-4">
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
