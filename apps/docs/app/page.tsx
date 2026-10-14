import { Suspense, type CSSProperties } from "react";
import { getAllIconEntries, getCategories } from "@/lib/icons";
import { IconExplorer } from "@/components/icon-explorer";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  const icons = getAllIconEntries();
  const categories = getCategories();

  return (
    // The provider is the flex row for the sidebar and the grid. Its default
    // min-h-svh is dropped so the page only scrolls when the grid needs it, and
    // items-start lets the sidebar stick below the navbar
    <SidebarProvider
      className="min-h-0 flex-1 items-start"
      style={{ "--sidebar-width": "16rem" } as CSSProperties}
    >
      <Suspense fallback={<main className="flex-1" />}>
        <IconExplorer icons={icons} categories={categories} />
      </Suspense>
    </SidebarProvider>
  );
}
