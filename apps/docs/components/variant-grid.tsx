'use client';

import type { Ref } from 'react';
import type { IconEntry } from '@/lib/types';
import type { IconWeight } from '@/utils/iconCodeSnippets';
import { IconRenderer } from '@/components/icon-renderer';
import { cn } from '@/lib/utils';

export type VariantKey =
  | 'regular'
  | 'bold'
  | 'fill'
  | 'regular-duotone'
  | 'bold-duotone'
  | 'fill-duotone';

export interface Variant {
  key: VariantKey;
  weight: IconWeight;
  duotone: boolean;
  label: string;
}

// Grid order: weights across, duotone on the second row
export const VARIANTS: Variant[] = [
  { key: 'regular', weight: 'regular', duotone: false, label: 'Regular' },
  { key: 'bold', weight: 'bold', duotone: false, label: 'Bold' },
  { key: 'fill', weight: 'fill', duotone: false, label: 'Fill' },
  { key: 'regular-duotone', weight: 'regular', duotone: true, label: 'Regular Duotone' },
  { key: 'bold-duotone', weight: 'bold', duotone: true, label: 'Bold Duotone' },
  { key: 'fill-duotone', weight: 'fill', duotone: true, label: 'Fill Duotone' },
];

interface VariantGridProps {
  icon: IconEntry;
  selected: VariantKey;
  onSelect: (variant: VariantKey) => void;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export function VariantGrid({ icon, selected, onSelect, className, ref }: VariantGridProps) {
  return (
    <div
      ref={ref}
      role="group"
      aria-label="Variant"
      className={cn('grid grid-cols-3 gap-2', className)}
    >
      {VARIANTS.filter((variant) => icon.variants[variant.key]).map((variant) => {
        const isSelected = variant.key === selected;
        return (
          <button
            key={variant.key}
            type="button"
            aria-pressed={isSelected}
            aria-label={variant.label}
            title={variant.label}
            onClick={() => onSelect(variant.key)}
            className={cn(
              'flex aspect-square cursor-pointer items-center justify-center rounded-3xl text-text-subtle outline-none transition-[color,background-color,box-shadow]',
              'hover:inset-ring hover:inset-ring-border-strong focus-visible:ring-3 focus-visible:ring-ring',
              isSelected && 'bg-surface-muted text-text'
            )}
          >
            <IconRenderer
              iconName={icon.kebabName}
              weight={variant.weight}
              duotone={variant.duotone}
              className="size-7"
            />
          </button>
        );
      })}
    </div>
  );
}
