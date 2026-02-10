import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M16 7a4 4 0 0 1 4 4v8a1 1 0 1 1-2 0v-8a2 2 0 0 0-2-2H6.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M7.3 3.3a1 1 0 1 1 1.4 1.4L5.42 8l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBoldDuotone.displayName = 'ArrowCornerUpLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftBoldDuotone, ArrowCornerUpLeftBoldDuotone as ArrowCornerUpLeftBoldDuotoneIcon, ArrowCornerUpLeftBoldDuotone as SiArrowCornerUpLeftBoldDuotone };
export default ArrowCornerUpLeftBoldDuotone;
export type { ArrowCornerUpLeftBoldDuotoneProps };
