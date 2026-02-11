import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-duotone" {...props}>
      <path d="M12 2.25a9.8 9.8 0 0 1 6.9 2.86.75.75 0 0 0-1.07 1.06 8.25 8.25 0 0 0-11.66 0A.75.75 0 1 0 5.1 5.1 9.8 9.8 0 0 1 12 2.25" opacity={.4} />
        <path d="M17.83 5.1c.3-.29.77-.29 1.06 0a9.75 9.75 0 1 1-13.78 0 .75.75 0 0 1 1.06 1.07 8.25 8.25 0 1 0 11.66 0 .75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegularDuotone.displayName = 'CircleNotchRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchRegularDuotone, CircleNotchRegularDuotone as CircleNotchRegularDuotoneIcon, CircleNotchRegularDuotone as SiCircleNotchRegularDuotone };
export default CircleNotchRegularDuotone;
export type { CircleNotchRegularDuotoneProps };
