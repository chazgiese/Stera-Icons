import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 7.41V19a1 1 0 1 1-2 0V7.41l1-1z" opacity={.4} />
        <path fill="currentColor" d="M4.3 12.7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L12 6.42l-6.3 6.3a1 1 0 0 1-1.4 0" />
    </IconBase>
  ))
);

ArrowUpBoldDuotone.displayName = 'ArrowUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpBoldDuotone, ArrowUpBoldDuotone as ArrowUpBoldDuotoneIcon, ArrowUpBoldDuotone as SiArrowUpBoldDuotone };
export default ArrowUpBoldDuotone;
export type { ArrowUpBoldDuotoneProps };
