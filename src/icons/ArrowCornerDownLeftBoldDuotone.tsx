import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M7.3 9.3a1 1 0 1 1 1.4 1.4L4.42 15l4.3 4.3a1 1 0 1 1-1.42 1.4l-5-5-.06-.07a1 1 0 0 1 .06-1.34z" />
        <path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H5.41l-1-1 1-1H18a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

ArrowCornerDownLeftBoldDuotone.displayName = 'ArrowCornerDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftBoldDuotone, ArrowCornerDownLeftBoldDuotone as ArrowCornerDownLeftBoldDuotoneIcon, ArrowCornerDownLeftBoldDuotone as SiArrowCornerDownLeftBoldDuotone };
export default ArrowCornerDownLeftBoldDuotone;
export type { ArrowCornerDownLeftBoldDuotoneProps };
