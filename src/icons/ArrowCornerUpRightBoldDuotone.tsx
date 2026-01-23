import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 21a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h12.59l1 1-1 1H6a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1" opacity={.4} />
        <path fill="currentColor" d="M16.7 14.7a1 1 0 1 1-1.4-1.4L19.58 9l-4.3-4.3a1 1 0 1 1 1.42-1.4l5 5 .06.07a1 1 0 0 1-.06 1.34z" />
    </IconBase>
  ))
);

ArrowCornerUpRightBoldDuotone.displayName = 'ArrowCornerUpRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightBoldDuotone, ArrowCornerUpRightBoldDuotone as ArrowCornerUpRightBoldDuotoneIcon, ArrowCornerUpRightBoldDuotone as SiArrowCornerUpRightBoldDuotone };
export default ArrowCornerUpRightBoldDuotone;
export type { ArrowCornerUpRightBoldDuotoneProps };
