import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 6a7.5 7.5 0 0 1 0 15H8a1 1 0 1 1 0-2h7.5a5.5 5.5 0 1 0 0-11H4.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M5.3 2.3a1 1 0 1 1 1.4 1.4L3.42 7l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopBoldDuotone.displayName = 'ArrowULeftTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopBoldDuotone, ArrowULeftTopBoldDuotone as ArrowULeftTopBoldDuotoneIcon, ArrowULeftTopBoldDuotone as SiArrowULeftTopBoldDuotone };
export type { ArrowULeftTopBoldDuotoneProps };
