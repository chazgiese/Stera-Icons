import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingNarrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowFillDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-narrow-fill-duotone" {...props}>
      <path d="M22 19a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM16 11a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M6 3h.1l.05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4A1 1 0 0 1 10 9H7v11a1 1 0 1 1-2 0V9H2a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 .4-.26h.05l.05-.02h.04z" />
    </IconBase>
  ))
);

SortAscendingNarrowFillDuotone.displayName = 'SortAscendingNarrowFillDuotone';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrowFillDuotone, SortAscendingNarrowFillDuotone as SortAscendingNarrowFillDuotoneIcon, SortAscendingNarrowFillDuotone as SiSortAscendingNarrowFillDuotone };
export default SortAscendingNarrowFillDuotone;
export type { SortAscendingNarrowFillDuotoneProps };
