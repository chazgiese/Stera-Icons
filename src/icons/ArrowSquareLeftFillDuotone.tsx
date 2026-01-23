import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-.3 4.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 1 0 1.4-1.4L9.42 13H17a1 1 0 0 0 0-2H9.41l3.3-3.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18 12a1 1 0 0 1-1 1H9.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.42 1.4L9.4 11H17a1 1 0 0 1 1 1" />
    </IconBase>
  ))
);

ArrowSquareLeftFillDuotone.displayName = 'ArrowSquareLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareLeftFillDuotone, ArrowSquareLeftFillDuotone as ArrowSquareLeftFillDuotoneIcon, ArrowSquareLeftFillDuotone as SiArrowSquareLeftFillDuotone };
export default ArrowSquareLeftFillDuotone;
export type { ArrowSquareLeftFillDuotoneProps };
