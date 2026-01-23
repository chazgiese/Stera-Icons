import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingFillProps = Omit<IconBaseProps, 'children'>;

const SortAscendingFill = memo(
  forwardRef<SVGSVGElement, SortAscendingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-fill" {...props}>
      <path fill="currentColor" d="m6.1 3 .05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4A1 1 0 0 1 10 9H7v11a1 1 0 1 1-2 0V9H2a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 .4-.26h.05l.05-.02h.04L6 3zM16 19a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2zM19 15a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M22 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SortAscendingFill.displayName = 'SortAscendingFill';

// Triple export pattern (lucide-react style)
export { SortAscendingFill, SortAscendingFill as SortAscendingFillIcon, SortAscendingFill as SiSortAscendingFill };
export default SortAscendingFill;
export type { SortAscendingFillProps };
