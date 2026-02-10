import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.7 5.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 0 1.4l4 4a1 1 0 1 0 1.4-1.4L10.42 13H16a1 1 0 1 0 0-2h-5.59l2.3-2.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleLeftFill.displayName = 'ArrowCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFill, ArrowCircleLeftFill as ArrowCircleLeftFillIcon, ArrowCircleLeftFill as SiArrowCircleLeftFill };
export default ArrowCircleLeftFill;
export type { ArrowCircleLeftFillProps };
