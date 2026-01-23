import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right-bold-duotone" {...props}>
      <path fill="currentColor" d="m20.59 12-1 1H4.4l-1-1 1-1H19.6z" opacity={.4} />
        <path fill="currentColor" d="M5.8 6.8a1 1 0 0 1 1.4 1.4L3.42 12l3.8 3.8a1 1 0 0 1-1.42 1.4l-4.5-4.5-.07-.07a1 1 0 0 1 .07-1.34zM16.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 .07 1.33l-.06.08-4.5 4.5a1 1 0 0 1-1.42-1.42L20.6 12l-3.8-3.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowLeftRightBoldDuotone.displayName = 'ArrowLeftRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightBoldDuotone, ArrowLeftRightBoldDuotone as ArrowLeftRightBoldDuotoneIcon, ArrowLeftRightBoldDuotone as SiArrowLeftRightBoldDuotone };
export default ArrowLeftRightBoldDuotone;
export type { ArrowLeftRightBoldDuotoneProps };
