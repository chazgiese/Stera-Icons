import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm1.23 5.17a1 1 0 0 0-1 1v3.24L9.88 8.46a1 1 0 1 0-1.42 1.42l3.95 3.95H9.17a1 1 0 0 0 0 2h5.66a1 1 0 0 0 1-1V9.17a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17a1 1 0 0 1 1 1v5.66a1 1 0 0 1-1 1H9.17a1 1 0 1 1 0-2h3.24L8.46 9.88a1 1 0 1 1 1.42-1.42l3.95 3.95V9.17a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowSquareDownRightFillDuotone.displayName = 'ArrowSquareDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownRightFillDuotone, ArrowSquareDownRightFillDuotone as ArrowSquareDownRightFillDuotoneIcon, ArrowSquareDownRightFillDuotone as SiArrowSquareDownRightFillDuotone };
export default ArrowSquareDownRightFillDuotone;
export type { ArrowSquareDownRightFillDuotoneProps };
