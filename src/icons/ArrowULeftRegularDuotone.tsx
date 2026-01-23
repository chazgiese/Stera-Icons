import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-duotone" {...props}>
      <path fill="currentColor" d="M15.5 3.25a7.25 7.25 0 1 1 0 14.5H3.81L3.06 17l.75-.75H15.5a5.75 5.75 0 0 0 0-11.5H8a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M5.47 12.47a.75.75 0 1 1 1.06 1.06L3.06 17l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4-.1-.11a.75.75 0 0 1 .1-.95z" />
    </IconBase>
  ))
);

ArrowULeftRegularDuotone.displayName = 'ArrowULeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftRegularDuotone, ArrowULeftRegularDuotone as ArrowULeftRegularDuotoneIcon, ArrowULeftRegularDuotone as SiArrowULeftRegularDuotone };
export default ArrowULeftRegularDuotone;
export type { ArrowULeftRegularDuotoneProps };
