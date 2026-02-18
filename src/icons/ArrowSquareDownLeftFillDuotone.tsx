import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.17 8.3c-.48 0-.87.39-.87.87v5.66a.9.9 0 0 0 .87.87h5.66a.88.88 0 0 0 0-1.75h-3.55l4.17-4.16a.88.88 0 0 0-1.24-1.24l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M9.17 8.3c.48 0 .88.39.88.87v3.55l4.16-4.17a.88.88 0 0 1 1.24 1.24l-4.17 4.16h3.55a.88.88 0 0 1 0 1.75H9.17a.9.9 0 0 1-.87-.87V9.17c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowSquareDownLeftFillDuotone.displayName = 'ArrowSquareDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownLeftFillDuotone, ArrowSquareDownLeftFillDuotone as ArrowSquareDownLeftFillDuotoneIcon, ArrowSquareDownLeftFillDuotone as SiArrowSquareDownLeftFillDuotone };
export default ArrowSquareDownLeftFillDuotone;
export type { ArrowSquareDownLeftFillDuotoneProps };
