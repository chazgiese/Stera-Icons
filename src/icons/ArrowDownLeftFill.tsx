import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-left-fill" {...props}>
      <path fill="currentColor" d="M17.3 5.3a1 1 0 1 1 1.4 1.4l-6.79 6.8 3.8 3.8A1 1 0 0 1 15 19H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1.7-.7l3.8 3.79z" />
    </IconBase>
  ))
);

ArrowDownLeftFill.displayName = 'ArrowDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftFill, ArrowDownLeftFill as ArrowDownLeftFillIcon, ArrowDownLeftFill as SiArrowDownLeftFill };
export default ArrowDownLeftFill;
export type { ArrowDownLeftFillProps };
