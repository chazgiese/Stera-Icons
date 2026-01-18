import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingNarrowBoldProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowBold = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m6.1 3 .05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4a1 1 0 1 1-1.42 1.42L7 6.4V20a1 1 0 0 1-2 0V6.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 .4-.25h.05l.05-.02h.04L6 3zM22 19a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM19 15a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M16 11a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SortAscendingNarrowBold.displayName = 'SortAscendingNarrowBold';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrowBold, SortAscendingNarrowBold as SortAscendingNarrowBoldIcon, SortAscendingNarrowBold as SiSortAscendingNarrowBold };
export type { SortAscendingNarrowBoldProps };
