"use client";

import { memo, useEffect, useRef } from "react";
import type { IconEntry } from "@/lib/types";
import type { IconWeight } from "@/utils/iconCodeSnippets";
import type { CategorySection as CategorySectionData } from "@/hooks/use-categorized-icons";
import { categoryLabel } from "@/lib/category-label";
import { IconCard } from "@/components/icon-card";
import { useScrollSpyRegistry } from "@/components/scroll-spy";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { SiSquareDashed } from "stera-icons";

interface CategorySectionsProps {
  sections: CategorySectionData[];
  weight: IconWeight;
  duotone: boolean;
  onIconClick: (icon: IconEntry) => void;
}

// Memoized so a keystroke skips the grid until the deferred query catches up
export const CategorySections = memo(function CategorySections({
  sections,
  weight,
  duotone,
  onIconClick,
}: CategorySectionsProps) {
  const { setActiveFromClick } = useScrollSpyRegistry();

  // Sections render on the client after hydration (the page bails out of
  // prerendering at the useSearchParams Suspense boundary), so the browser
  // can't resolve a #category deep link on load. Do it once here instead
  const handledHash = useRef(false);
  useEffect(() => {
    if (handledHash.current || sections.length === 0) return;
    handledHash.current = true;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    // Instant: landing on a deep link shouldn't animate through the whole page
    target.scrollIntoView({ behavior: "instant" });
    setActiveFromClick(id);
  }, [sections, setActiveFromClick]);

  if (sections.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SiSquareDashed />
          </EmptyMedia>
          <EmptyTitle>No icons found</EmptyTitle>
          <EmptyDescription>Try adjusting your search term or request an icon by creating an issue on GitHub.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="brand" nativeButton={false} render={<a href="https://github.com/hauntedjpeg/Stera-Icons/issues/new?template=request.md" />}>Request an icon</Button>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {sections.map(({ category, icons }) => (
        <CategorySection
          key={category.id}
          id={category.id}
          title={categoryLabel(category.id)}
          icons={icons}
          weight={weight}
          duotone={duotone}
          onIconClick={onIconClick}
        />
      ))}
    </div>
  );
});

interface CategorySectionProps {
  id: string;
  title: string;
  icons: IconEntry[];
  weight: IconWeight;
  duotone: boolean;
  onIconClick: (icon: IconEntry) => void;
}

const CategorySection = memo(function CategorySection({
  id,
  title,
  icons,
  weight,
  duotone,
  onIconClick,
}: CategorySectionProps) {
  const { register } = useScrollSpyRegistry();
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      // Callback ref with cleanup: the section observes itself while mounted
      ref={(element) => (element ? register(id, element) : undefined)}
      // Anchor jumps land the heading just below the sticky navbar
      className="scroll-mt-[calc(var(--spacing-navbar)+--spacing(4))]"
    >
      <h2 id={headingId} className="st-body-md-strong text-text-subtle mb-4 mt-1">
        {title}
      </h2>
      <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 xl:grid-cols-12 gap-3">
        {icons.map((icon) => (
          <IconCard
            key={icon.kebabName}
            icon={icon}
            weight={weight}
            duotone={duotone}
            onIconClick={onIconClick}
          />
        ))}
      </div>
    </section>
  );
});
