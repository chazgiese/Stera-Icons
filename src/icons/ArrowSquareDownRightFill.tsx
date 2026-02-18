import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-right-fill" {...props}>
      <path fillRule="evenodd" d="M9.9 2.63q-1.64-.01-2.7.05a5 5 0 0 0-1.91.48 5 5 0 0 0-2.13 2.13 5 5 0 0 0-.48 1.91q-.07 1.06-.06 2.7v4.2q-.02 1.64.06 2.7a5 5 0 0 0 .48 1.91 5 5 0 0 0 2.13 2.13 5 5 0 0 0 1.91.48c.71.06 1.6.05 2.7.05h4.2q1.64.01 2.7-.05a5 5 0 0 0 1.91-.48 5 5 0 0 0 2.13-2.13 5 5 0 0 0 .48-1.91c.06-.71.05-1.6.05-2.7V9.9q.01-1.64-.05-2.7a5 5 0 0 0-.48-1.91 5 5 0 0 0-2.13-2.13 5 5 0 0 0-1.91-.48q-1.06-.07-2.7-.06zm4.93 5.67c.48 0 .87.39.87.87v5.66a.9.9 0 0 1-.87.87H9.17a.88.88 0 0 1 0-1.75h3.55L8.55 9.8A.88.88 0 0 1 9.8 8.55l4.16 4.17V9.17c0-.48.4-.87.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareDownRightFill.displayName = 'ArrowSquareDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownRightFill, ArrowSquareDownRightFill as ArrowSquareDownRightFillIcon, ArrowSquareDownRightFill as SiArrowSquareDownRightFill };
export default ArrowSquareDownRightFill;
export type { ArrowSquareDownRightFillProps };
