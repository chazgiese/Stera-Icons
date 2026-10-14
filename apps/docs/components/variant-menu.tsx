"use client";

import { useIconVariant } from "@/hooks/useIconVariant";
import type { IconWeight } from "@/utils/iconCodeSnippets";
import { InputGroupButton } from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiLayoutGridCircle } from "stera-icons/icons/LayoutGridCircle";

const WEIGHTS: { value: IconWeight; label: string }[] = [
  { value: "regular", label: "Regular" },
  { value: "bold", label: "Bold" },
  { value: "fill", label: "Fill" },
];

const itemClassName =
  "items-center rounded-2xl py-2.5 pr-10 pl-3.5 st-body-lg text-text-subtle focus:bg-surface-muted-hover [&_[data-slot$='-indicator']]:right-3.5 [&_svg:not([class*='size-'])]:size-5";

export function VariantMenu() {
  const { weight, duotone, setVariant } = useIconVariant();

  return (
    <DropdownMenu>
      {/* Lives inside the search pill's inline-end addon, see search-input.tsx */}
      <DropdownMenuTrigger
        render={
          <InputGroupButton
            variant="ghost"
            size="icon-sm"
            className="rounded-full hover:bg-surface-muted-hover"
            aria-label="Icon variant"
          />
        }
      >
        <SiLayoutGridCircle weight={weight} duotone={duotone} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-6}
        sideOffset={12}
        className="min-w-52 rounded-3xl p-1.5"
      >
        <DropdownMenuRadioGroup
          value={weight}
          onValueChange={(value) => setVariant(value as IconWeight, duotone)}
        >
          {/* Base UI group labels must sit inside a group, so this also names the radio group */}
          <DropdownMenuLabel className="px-3.5">Variants</DropdownMenuLabel>
          {WEIGHTS.map(({ value, label }) => (
            <DropdownMenuRadioItem key={value} value={value} className={itemClassName}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator className="-mx-1.5 my-1.5 bg-border-strong" />
        <DropdownMenuCheckboxItem
          checked={duotone}
          onCheckedChange={(checked) => setVariant(weight, checked)}
          className={itemClassName}
        >
          Duotone
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
