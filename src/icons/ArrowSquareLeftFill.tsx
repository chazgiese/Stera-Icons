import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-left-fill" {...props}>
      <path fillRule="evenodd" d="M21.38 14.1q.02 1.64-.06 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06h4.2q1.64-.02 2.7.06a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7zm-4.5-2.1c0-.48-.4-.87-.88-.87h-5.89l2.5-2.51a.88.88 0 0 0-1.23-1.24l-4 4a.9.9 0 0 0 0 1.24l4 4a.88.88 0 0 0 1.24-1.24l-2.5-2.5H16c.48 0 .88-.4.88-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareLeftFill.displayName = 'ArrowSquareLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareLeftFill, ArrowSquareLeftFill as ArrowSquareLeftFillIcon, ArrowSquareLeftFill as SiArrowSquareLeftFill };
export default ArrowSquareLeftFill;
export type { ArrowSquareLeftFillProps };
