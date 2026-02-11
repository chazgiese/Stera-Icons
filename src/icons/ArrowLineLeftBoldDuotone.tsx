import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-left-bold-duotone" {...props}>
      <path d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M13.3 4.3a1 1 0 1 1 1.4 1.4L9.42 11H21a1 1 0 0 1 0 2H9.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1-.25-.4l-.01-.06a1 1 0 0 1 0-.47l.01-.06a1 1 0 0 1 .13-.27l.12-.15z" />
    </IconBase>
  ))
);

ArrowLineLeftBoldDuotone.displayName = 'ArrowLineLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftBoldDuotone, ArrowLineLeftBoldDuotone as ArrowLineLeftBoldDuotoneIcon, ArrowLineLeftBoldDuotone as SiArrowLineLeftBoldDuotone };
export default ArrowLineLeftBoldDuotone;
export type { ArrowLineLeftBoldDuotoneProps };
