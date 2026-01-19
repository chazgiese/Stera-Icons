import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingFillDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-fill-duotone" {...props}>
      <path d="M16 19a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 3h.1l.05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4A1 1 0 0 1 10 9H7v11a1 1 0 1 1-2 0V9H2a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 .4-.26h.05l.05-.02h.04z" />
    </IconBase>
  ))
);

SortAscendingFillDuotone.displayName = 'SortAscendingFillDuotone';

// Triple export pattern (lucide-react style)
export { SortAscendingFillDuotone, SortAscendingFillDuotone as SortAscendingFillDuotoneIcon, SortAscendingFillDuotone as SiSortAscendingFillDuotone };
export default SortAscendingFillDuotone;
export type { SortAscendingFillDuotoneProps };
