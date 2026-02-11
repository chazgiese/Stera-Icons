import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-down-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 3q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q2.98 14.05 3 12q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q9.95 2.98 12 3m4.7 6.8a1 1 0 0 0-1.4 0L12 13.08l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path d="M15.3 9.8a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29z" />
    </IconBase>
  ))
);

ChevronSquareDownFillDuotone.displayName = 'ChevronSquareDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronSquareDownFillDuotone, ChevronSquareDownFillDuotone as ChevronSquareDownFillDuotoneIcon, ChevronSquareDownFillDuotone as SiChevronSquareDownFillDuotone };
export default ChevronSquareDownFillDuotone;
export type { ChevronSquareDownFillDuotoneProps };
