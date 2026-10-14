import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeLink } from "@/components/home-link"
import { NAV_LINKS } from "@/components/nav-links"
import { NavMenu } from "@/components/nav-menu"
import { SearchInput } from "@/components/search-input"

export function Navbar() {
  return (
    // The ::before gradient fades page content as it scrolls under the navbar.
    // It is a fixed overlay rather than a scroll-fade mask so it shows whether
    // or not the page overflows. z-index -1 keeps it behind the nav's controls
    // but above the page, since the sticky z-50 nav is its own stacking context
    <nav className="sticky top-0 z-50 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-linear-to-b before:from-surface before:to-transparent">
      {/* Three columns so the search pill is centered regardless of the outer groups' widths */}
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center p-4 sm:px-4">

        <div className="flex gap-2 justify-self-start">
          <HomeLink />
        </div>

        <SearchInput />

        <div className="justify-self-end flex max-sm:hidden">
          {NAV_LINKS.map(({ label, href, icon: Icon, internal }) => (
            <Button
              key={href}
              variant="ghost"
              size="icon-lg"
              aria-label={label}
              nativeButton={false}
              render={internal ? <Link href={href} /> : <a href={href} target="_blank" rel="noopener noreferrer" />}
            >
              <Icon />
            </Button>
          ))}
        </div>

        <div className="justify-self-end sm:hidden">
          <NavMenu />
        </div>

      </div>
    </nav>
  );
}
