import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-.9 4.3a1 1 0 0 0-1.4 1.4l2.29 2.3H8a1 1 0 0 0 0 2h5.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" clipRule="evenodd" opacity={.4} />
        <path d="M11.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4l2.29-2.3H8a1 1 0 0 1 0-2h5.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowSquareRightFillDuotone.displayName = 'ArrowSquareRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareRightFillDuotone, ArrowSquareRightFillDuotone as ArrowSquareRightFillDuotoneIcon, ArrowSquareRightFillDuotone as SiArrowSquareRightFillDuotone };
export default ArrowSquareRightFillDuotone;
export type { ArrowSquareRightFillDuotoneProps };
