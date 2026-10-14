'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { VARIANTS, type Variant } from '@/components/variant-grid';
import type { IconWeight } from '@/utils/iconCodeSnippets';

const DEFAULT_VARIANT = VARIANTS[0];

// The URL query param is the source of truth for the variant shown in the grid.
// Must be used inside a Suspense boundary, like any useSearchParams caller
export function useIconVariant() {
  const searchParams = useSearchParams();
  const variantParam = searchParams.get('variant');
  const variant: Variant =
    VARIANTS.find((v) => v.key === variantParam) ?? DEFAULT_VARIANT;

  // history.replaceState updates useSearchParams without a server round trip.
  // The URL is read when called, so setVariant keeps a stable identity
  const setVariant = useCallback(
    (weight: IconWeight, duotone: boolean) => {
      const next =
        VARIANTS.find((v) => v.weight === weight && v.duotone === duotone) ??
        DEFAULT_VARIANT;
      const params = new URLSearchParams(window.location.search);
      if (next.key === DEFAULT_VARIANT.key) {
        params.delete('variant');
      } else {
        params.set('variant', next.key);
      }
      const qs = params.toString();
      // Keep the #category fragment so a deep link survives a variant change
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`
      );
    },
    []
  );

  return { ...variant, setVariant };
}
