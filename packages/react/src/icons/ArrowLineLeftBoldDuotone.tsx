import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M13.3 4.3a1 1 0 1 1 1.4 1.4L9.42 11H21a1 1 0 1 1 0 2H9.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1-.25-.4l-.01-.06a1 1 0 0 1 0-.47l.01-.06a1 1 0 0 1 .25-.42z" />
    </IconBase>
  ))
);

ArrowLineLeftBoldDuotone.displayName = 'ArrowLineLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftBoldDuotone, ArrowLineLeftBoldDuotone as ArrowLineLeftBoldDuotoneIcon, ArrowLineLeftBoldDuotone as SiArrowLineLeftBoldDuotone };
export type { ArrowLineLeftBoldDuotoneProps };
