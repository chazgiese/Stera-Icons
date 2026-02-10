import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5a1 1 0 0 0-.7.3l-4 4a1 1 0 0 0 1.4 1.4l2.3-2.28V16a1 1 0 0 0 2 0v-5.59l2.3 2.3a1 1 0 0 0 1.4-1.42l-4-4A1 1 0 0 0 12 7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7a1 1 0 0 1 .7.3l4 4a1 1 0 0 1-1.4 1.4L13 10.43V16a1 1 0 0 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4A1 1 0 0 1 12 7" />
    </IconBase>
  ))
);

ArrowCircleUpFillDuotone.displayName = 'ArrowCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFillDuotone, ArrowCircleUpFillDuotone as ArrowCircleUpFillDuotoneIcon, ArrowCircleUpFillDuotone as SiArrowCircleUpFillDuotone };
export default ArrowCircleUpFillDuotone;
export type { ArrowCircleUpFillDuotoneProps };
