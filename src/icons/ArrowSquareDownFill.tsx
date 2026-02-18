import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-fill" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 7.13c-.48 0-.87.39-.87.87v5.89l-2.51-2.5a.88.88 0 0 0-1.24 1.23l4 4a.9.9 0 0 0 1.24 0l4-4a.88.88 0 0 0-1.24-1.24l-2.5 2.5V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareDownFill.displayName = 'ArrowSquareDownFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownFill, ArrowSquareDownFill as ArrowSquareDownFillIcon, ArrowSquareDownFill as SiArrowSquareDownFill };
export default ArrowSquareDownFill;
export type { ArrowSquareDownFillProps };
