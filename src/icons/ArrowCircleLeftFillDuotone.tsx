import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.7 5.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 0 1.4l4 4a1 1 0 0 0 1.4-1.4L10.42 13H16a1 1 0 0 0 0-2h-5.59l2.3-2.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.3 7.3a1 1 0 0 1 1.4 1.4L10.42 11H16a1 1 0 0 1 0 2h-5.59l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowCircleLeftFillDuotone.displayName = 'ArrowCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFillDuotone, ArrowCircleLeftFillDuotone as ArrowCircleLeftFillDuotoneIcon, ArrowCircleLeftFillDuotone as SiArrowCircleLeftFillDuotone };
export default ArrowCircleLeftFillDuotone;
export type { ArrowCircleLeftFillDuotoneProps };
