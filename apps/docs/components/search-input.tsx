"use client";

import { Suspense, useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSearchQuery, useSetSearchQuery } from "@/components/search-provider";
import { VariantMenu } from "@/components/variant-menu";
import { SiSearch, SiX } from "stera-icons";

export function SearchInput() {
  const query = useSearchQuery();
  const setQuery = useSetSearchQuery();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup className="w-56 sm:w-72 rounded-full glass shadow-none transition-colors has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:bg-alpha-3">
      {/* Fixed-width slot so swapping the icon for the clear button never shifts the input text */}
      <InputGroupAddon className="w-11 justify-center pl-0! has-[>button]:ml-0 [&>svg]:text-text">
        {query ? (
          <InputGroupButton
            variant="ghost"
            size="icon-sm"
            className="rounded-full hover:bg-surface-muted-hover"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <SiX />
          </InputGroupButton>
        ) : (
          <SiSearch />
        )}
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        type="text"
        size="lg"
        aria-label="Search icons"
        placeholder="Search icons"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <InputGroupAddon align="inline-end" className="pr-1.5!">
        {/* useIconVariant reads useSearchParams, so the menu needs a Suspense
            boundary. The fallback reserves the same space to avoid a layout shift */}
        <Suspense
          fallback={
            <InputGroupButton
              variant="ghost"
              size="icon-sm"
              className="rounded-full"
              disabled
              aria-hidden
            />
          }
        >
          <VariantMenu />
        </Suspense>
      </InputGroupAddon>
    </InputGroup>
  );
}
