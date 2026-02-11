import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M11.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l2.29-2.3H8a1 1 0 0 1 0-2h5.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCircleRightBoldDuotone.displayName = 'ArrowCircleRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightBoldDuotone, ArrowCircleRightBoldDuotone as ArrowCircleRightBoldDuotoneIcon, ArrowCircleRightBoldDuotone as SiArrowCircleRightBoldDuotone };
export default ArrowCircleRightBoldDuotone;
export type { ArrowCircleRightBoldDuotoneProps };
