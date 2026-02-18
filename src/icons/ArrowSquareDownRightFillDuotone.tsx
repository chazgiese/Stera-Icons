import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm.73 5.67c-.48 0-.88.39-.88.87v3.55L9.8 8.55A.88.88 0 0 0 8.55 9.8l4.17 4.16H9.17a.88.88 0 0 0 0 1.75h5.66a.9.9 0 0 0 .87-.87V9.17c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.3c.48 0 .87.39.87.87v5.66a.9.9 0 0 1-.87.87H9.17a.88.88 0 0 1 0-1.75h3.55L8.55 9.8A.88.88 0 0 1 9.8 8.55l4.16 4.17V9.17c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowSquareDownRightFillDuotone.displayName = 'ArrowSquareDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownRightFillDuotone, ArrowSquareDownRightFillDuotone as ArrowSquareDownRightFillDuotoneIcon, ArrowSquareDownRightFillDuotone as SiArrowSquareDownRightFillDuotone };
export default ArrowSquareDownRightFillDuotone;
export type { ArrowSquareDownRightFillDuotoneProps };
