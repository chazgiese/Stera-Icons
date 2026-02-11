import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-fill" {...props}>
      <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m10.6 3.53a1 1 0 0 0-1.4 0l-3.96 3.95V9.17a1 1 0 0 0-2 0v5.66a1 1 0 0 0 1 1h5.66a1 1 0 0 0 0-2h-3.24l3.95-3.95a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFill.displayName = 'ArrowCircleDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftFill, ArrowCircleDownLeftFill as ArrowCircleDownLeftFillIcon, ArrowCircleDownLeftFill as SiArrowCircleDownLeftFill };
export default ArrowCircleDownLeftFill;
export type { ArrowCircleDownLeftFillProps };
