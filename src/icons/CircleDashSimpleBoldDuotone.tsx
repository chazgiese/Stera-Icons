import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-bold-duotone" {...props}>
      <path d="M3.34 7a1 1 0 0 1 1.73 1 8 8 0 0 0 0 8 1 1 0 0 1-1.73 1 10 10 0 0 1 0-10M19.3 6.63a1 1 0 0 1 1.36.37 10 10 0 0 1 0 10 1 1 0 0 1-1.73-1 8 8 0 0 0 0-8 1 1 0 0 1 .36-1.37" opacity={0.4} />
        <path d="M16 18.93a1 1 0 0 1 1 1.73 10 10 0 0 1-10 0 1 1 0 0 1 1-1.73 8 8 0 0 0 8 0M12 2c1.82 0 3.53.49 5 1.34a1 1 0 0 1-1 1.73 8 8 0 0 0-8 0 1 1 0 0 1-1-1.73A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

CircleDashSimpleBoldDuotone.displayName = 'CircleDashSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleBoldDuotone, CircleDashSimpleBoldDuotone as CircleDashSimpleBoldDuotoneIcon, CircleDashSimpleBoldDuotone as SiCircleDashSimpleBoldDuotone };
export default CircleDashSimpleBoldDuotone;
export type { CircleDashSimpleBoldDuotoneProps };
