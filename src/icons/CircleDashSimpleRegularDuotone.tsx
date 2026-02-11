import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-duotone" {...props}>
      <path d="M3.56 7.12a.75.75 0 1 1 1.3.75 8.2 8.2 0 0 0 0 8.25.75.75 0 0 1-1.3.76 9.7 9.7 0 0 1 0-9.76M19.42 6.85a.75.75 0 0 1 1.02.27 9.7 9.7 0 0 1 0 9.76.75.75 0 1 1-1.3-.76 8.2 8.2 0 0 0 0-8.25.75.75 0 0 1 .28-1.02" opacity={0.4} />
        <path d="M16.12 19.15a.75.75 0 0 1 .76 1.3 9.7 9.7 0 0 1-9.76 0 .75.75 0 1 1 .75-1.3 8.2 8.2 0 0 0 8.25 0M12 2.25a9.7 9.7 0 0 1 4.88 1.3.75.75 0 1 1-.76 1.3 8.2 8.2 0 0 0-8.25 0 .75.75 0 0 1-.75-1.3A9.7 9.7 0 0 1 12 2.26" />
    </IconBase>
  ))
);

CircleDashSimpleRegularDuotone.displayName = 'CircleDashSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleRegularDuotone, CircleDashSimpleRegularDuotone as CircleDashSimpleRegularDuotoneIcon, CircleDashSimpleRegularDuotone as SiCircleDashSimpleRegularDuotone };
export default CircleDashSimpleRegularDuotone;
export type { CircleDashSimpleRegularDuotoneProps };
