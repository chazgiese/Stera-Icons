import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingNarrowFillProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowFill = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-narrow-fill" {...props}>
      <path fill="currentColor" d="m6.1 3 .05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4A1 1 0 0 1 10 9H7v11a1 1 0 1 1-2 0V9H2a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 .4-.26h.05l.05-.02h.04L6 3zM22 19a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM19 15a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M16 11a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SortAscendingNarrowFill.displayName = 'SortAscendingNarrowFill';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrowFill, SortAscendingNarrowFill as SortAscendingNarrowFillIcon, SortAscendingNarrowFill as SiSortAscendingNarrowFill };
export default SortAscendingNarrowFill;
export type { SortAscendingNarrowFillProps };
