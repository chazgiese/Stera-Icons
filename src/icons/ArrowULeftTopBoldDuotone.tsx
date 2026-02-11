import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-bold-duotone" {...props}>
      <path d="M13.5 7a6.5 6.5 0 1 1 0 13H9a1 1 0 1 1 0-2h4.5a4.5 4.5 0 1 0 0-9H6.41l-1-1 1-1z" opacity={.4} />
        <path d="M7.3 3.3a1 1 0 1 1 1.4 1.4L5.42 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopBoldDuotone.displayName = 'ArrowULeftTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopBoldDuotone, ArrowULeftTopBoldDuotone as ArrowULeftTopBoldDuotoneIcon, ArrowULeftTopBoldDuotone as SiArrowULeftTopBoldDuotone };
export default ArrowULeftTopBoldDuotone;
export type { ArrowULeftTopBoldDuotoneProps };
