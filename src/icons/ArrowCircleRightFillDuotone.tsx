import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.7 5.3a1 1 0 0 0-1.4 1.4l2.29 2.3H8a1 1 0 0 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l2.29-2.3H8a1 1 0 0 1 0-2h5.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCircleRightFillDuotone.displayName = 'ArrowCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFillDuotone, ArrowCircleRightFillDuotone as ArrowCircleRightFillDuotoneIcon, ArrowCircleRightFillDuotone as SiArrowCircleRightFillDuotone };
export default ArrowCircleRightFillDuotone;
export type { ArrowCircleRightFillDuotoneProps };
