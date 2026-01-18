import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortNarrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortNarrowFillDuotone = memo(
  forwardRef<SVGSVGElement, SortNarrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 7a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2zM16 3a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 3a1 1 0 0 1 1 1v11h3a1 1 0 0 1 .7 1.7l-4 4-.07.07-.13.1H6.5a1 1 0 0 1-.66.11H5.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-4-4A1 1 0 0 1 2 15h3V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SortNarrowFillDuotone.displayName = 'SortNarrowFillDuotone';

// Triple export pattern (lucide-react style)
export { SortNarrowFillDuotone, SortNarrowFillDuotone as SortNarrowFillDuotoneIcon, SortNarrowFillDuotone as SiSortNarrowFillDuotone };
export type { SortNarrowFillDuotoneProps };
