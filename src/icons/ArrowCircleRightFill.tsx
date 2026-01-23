import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0M6 12a1 1 0 0 0 1 1h7.59l-3.3 3.3a1 1 0 1 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.42 1.4l3.3 3.3H7a1 1 0 0 0-1 1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightFill.displayName = 'ArrowCircleRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFill, ArrowCircleRightFill as ArrowCircleRightFillIcon, ArrowCircleRightFill as SiArrowCircleRightFill };
export default ArrowCircleRightFill;
export type { ArrowCircleRightFillProps };
