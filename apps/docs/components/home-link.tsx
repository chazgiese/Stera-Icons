"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSetSearchQuery } from "@/components/search-provider";
import { SiAsteriskAlt } from "stera-icons";

// Returns to the full icon grid, so it also clears the search
export function HomeLink() {
  const setQuery = useSetSearchQuery();
  const link = <Link href="/" onClick={() => setQuery("")} />;

  return (
    <>
      <Button
        variant="ghost"
        size="icon-lg"
        className="sm:hidden"
        aria-label="Stera Icons"
        nativeButton={false}
        render={link}
      >
        <SiAsteriskAlt />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="max-sm:hidden"
        nativeButton={false}
        render={link}
      >
        <SiAsteriskAlt data-icon="inline-start" />Stera Icons
      </Button>
    </>
  );
}
