import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H5.41l-1 1 1 1H18a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1" opacity={.4} />
        <path fill="currentColor" d="M7.3 14.7a1 1 0 1 0 1.4-1.4L4.42 9l4.3-4.3a1 1 0 1 0-1.42-1.4l-5 5-.06.07a1 1 0 0 0 .06 1.34z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBoldDuotone.displayName = 'ArrowCornerUpLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftBoldDuotone, ArrowCornerUpLeftBoldDuotone as ArrowCornerUpLeftBoldDuotoneIcon, ArrowCornerUpLeftBoldDuotone as SiArrowCornerUpLeftBoldDuotone };
export default ArrowCornerUpLeftBoldDuotone;
export type { ArrowCornerUpLeftBoldDuotoneProps };
