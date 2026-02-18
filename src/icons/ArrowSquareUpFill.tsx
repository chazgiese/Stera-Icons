import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-fill" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 7.13q-.36 0-.62.25l-4 4a.88.88 0 0 0 1.24 1.24l2.5-2.5V16a.88.88 0 0 0 1.76 0v-5.89l2.5 2.5a.88.88 0 0 0 1.24-1.23l-4-4a1 1 0 0 0-.62-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpFill.displayName = 'ArrowSquareUpFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpFill, ArrowSquareUpFill as ArrowSquareUpFillIcon, ArrowSquareUpFill as SiArrowSquareUpFill };
export default ArrowSquareUpFill;
export type { ArrowSquareUpFillProps };
