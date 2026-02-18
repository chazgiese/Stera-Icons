import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-right-fill" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.17 8.3a.88.88 0 0 0 0 1.75h3.55L8.55 14.2a.88.88 0 0 0 1.24 1.24l4.16-4.17v3.55a.88.88 0 0 0 1.75 0V9.17a.9.9 0 0 0-.87-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpRightFill.displayName = 'ArrowSquareUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpRightFill, ArrowSquareUpRightFill as ArrowSquareUpRightFillIcon, ArrowSquareUpRightFill as SiArrowSquareUpRightFill };
export default ArrowSquareUpRightFill;
export type { ArrowSquareUpRightFillProps };
