import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m.7 5.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5 5a1 1 0 1 0 1.4-1.4L9.42 13H17a1 1 0 0 0 0-2H9.41l3.3-3.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18 12a1 1 0 0 1-1 1H9.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.42 1.4L9.4 11H17a1 1 0 0 1 1 1" />
    </IconBase>
  ))
);

ArrowCircleLeftFillDuotone.displayName = 'ArrowCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFillDuotone, ArrowCircleLeftFillDuotone as ArrowCircleLeftFillDuotoneIcon, ArrowCircleLeftFillDuotone as SiArrowCircleLeftFillDuotone };
export default ArrowCircleLeftFillDuotone;
export type { ArrowCircleLeftFillDuotoneProps };
