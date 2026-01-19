import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDashSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-duotone" {...props}>
      <path d="M2.69 6.62a.75.75 0 1 1 1.3.75 9.2 9.2 0 0 0 0 9.25.75.75 0 0 1-1.3.76 10.7 10.7 0 0 1 0-10.76M20.29 6.35a.75.75 0 0 1 1.02.27 10.7 10.7 0 0 1 0 10.76.75.75 0 1 1-1.3-.76 9.2 9.2 0 0 0 0-9.25.75.75 0 0 1 .28-1.02" opacity={0.4} />
        <path fill="currentColor" d="M16.63 20.01a.75.75 0 0 1 .75 1.3 10.7 10.7 0 0 1-10.76 0 .75.75 0 1 1 .76-1.3 9.2 9.2 0 0 0 9.25 0M12 1.25c1.96 0 3.8.52 5.38 1.44a.75.75 0 1 1-.75 1.3 9.2 9.2 0 0 0-9.25 0 .75.75 0 0 1-.76-1.3A10.7 10.7 0 0 1 12 1.25" />
    </IconBase>
  ))
);

CircleDashSimpleRegularDuotone.displayName = 'CircleDashSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleRegularDuotone, CircleDashSimpleRegularDuotone as CircleDashSimpleRegularDuotoneIcon, CircleDashSimpleRegularDuotone as SiCircleDashSimpleRegularDuotone };
export type { CircleDashSimpleRegularDuotoneProps };
