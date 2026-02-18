import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-1.48 4.75a.88.88 0 0 0-1.24 1.24l2.5 2.5H8a.88.88 0 0 0 0 1.76h5.89l-2.5 2.5a.88.88 0 0 0 1.23 1.24l4-4a.9.9 0 0 0 0-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.38a.9.9 0 0 1 1.24 0l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24l2.5-2.5H8a.88.88 0 0 1 0-1.76h5.89l-2.5-2.5a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

ArrowSquareRightFillDuotone.displayName = 'ArrowSquareRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareRightFillDuotone, ArrowSquareRightFillDuotone as ArrowSquareRightFillDuotoneIcon, ArrowSquareRightFillDuotone as SiArrowSquareRightFillDuotone };
export default ArrowSquareRightFillDuotone;
export type { ArrowSquareRightFillDuotoneProps };
