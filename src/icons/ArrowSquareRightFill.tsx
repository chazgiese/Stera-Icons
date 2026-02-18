import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-right-fill" {...props}>
      <path fillRule="evenodd" d="M2.63 14.1q-.01 1.64.05 2.7a5 5 0 0 0 .48 1.91 5 5 0 0 0 2.13 2.13 5 5 0 0 0 1.91.48c.71.06 1.6.05 2.7.05h4.2q1.64.01 2.7-.05a5 5 0 0 0 1.91-.48 5 5 0 0 0 2.13-2.13 5 5 0 0 0 .48-1.91c.06-.71.05-1.6.05-2.7V9.9q.01-1.64-.05-2.7a5 5 0 0 0-.48-1.91 5 5 0 0 0-2.13-2.13 5 5 0 0 0-1.91-.48q-1.06-.07-2.7-.06H9.9q-1.64-.02-2.7.06a5 5 0 0 0-1.91.48 5 5 0 0 0-2.13 2.13 5 5 0 0 0-.48 1.91q-.07 1.06-.06 2.7zm4.5-2.1c0-.48.39-.87.87-.87h5.89l-2.5-2.51a.88.88 0 0 1 1.23-1.24l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24l2.5-2.5H8a.9.9 0 0 1-.87-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareRightFill.displayName = 'ArrowSquareRightFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareRightFill, ArrowSquareRightFill as ArrowSquareRightFillIcon, ArrowSquareRightFill as SiArrowSquareRightFill };
export default ArrowSquareRightFill;
export type { ArrowSquareRightFillProps };
