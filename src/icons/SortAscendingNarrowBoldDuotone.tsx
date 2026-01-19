import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingNarrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-narrow-bold-duotone" {...props}>
      <path d="M22 19a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM16 11a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 3h.1l.05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4a1 1 0 1 1-1.42 1.42L7 6.4V20a1 1 0 0 1-2 0V6.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 .4-.25h.05l.05-.02h.04z" />
    </IconBase>
  ))
);

SortAscendingNarrowBoldDuotone.displayName = 'SortAscendingNarrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrowBoldDuotone, SortAscendingNarrowBoldDuotone as SortAscendingNarrowBoldDuotoneIcon, SortAscendingNarrowBoldDuotone as SiSortAscendingNarrowBoldDuotone };
export type { SortAscendingNarrowBoldDuotoneProps };
