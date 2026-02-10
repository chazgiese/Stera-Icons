import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m9.9 3.24a1 1 0 0 0-1 1v3.24L9.88 8.46a1 1 0 1 0-1.42 1.42l3.95 3.95H9.17a1 1 0 1 0 0 2h5.66a1 1 0 0 0 1-1V9.17a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightFill.displayName = 'ArrowCircleDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFill, ArrowCircleDownRightFill as ArrowCircleDownRightFillIcon, ArrowCircleDownRightFill as SiArrowCircleDownRightFill };
export default ArrowCircleDownRightFill;
export type { ArrowCircleDownRightFillProps };
