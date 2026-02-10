import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H6.41l-1-1 1-1H16a2 2 0 0 0 2-2V5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M7.3 11.3a1 1 0 1 1 1.4 1.4L5.42 16l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4-.06-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBoldDuotone.displayName = 'ArrowCornerDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftBoldDuotone, ArrowCornerDownLeftBoldDuotone as ArrowCornerDownLeftBoldDuotoneIcon, ArrowCornerDownLeftBoldDuotone as SiArrowCornerDownLeftBoldDuotone };
export default ArrowCornerDownLeftBoldDuotone;
export type { ArrowCornerDownLeftBoldDuotoneProps };
