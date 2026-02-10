import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-fill-duotone" {...props}>
      <path d="M16 18.93a1 1 0 0 1 1 1.73 10 10 0 0 1-10 0 1 1 0 0 1 1-1.73 8 8 0 0 0 8 0M3.34 7a1 1 0 0 1 1.73 1 8 8 0 0 0 0 8 1 1 0 0 1-1.73 1 10 10 0 0 1 0-10M19.3 6.63a1 1 0 0 1 1.36.37 10 10 0 0 1 0 10 1 1 0 0 1-1.73-1 8 8 0 0 0 0-8 1 1 0 0 1 .36-1.37M12 2c1.82 0 3.53.49 5 1.34a1 1 0 0 1-1 1.73 8 8 0 0 0-8 0 1 1 0 0 1-1-1.73A10 10 0 0 1 12 2" opacity={0.4} />
    </IconBase>
  ))
);

CircleDashSimpleFillDuotone.displayName = 'CircleDashSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleFillDuotone, CircleDashSimpleFillDuotone as CircleDashSimpleFillDuotoneIcon, CircleDashSimpleFillDuotone as SiCircleDashSimpleFillDuotone };
export default CircleDashSimpleFillDuotone;
export type { CircleDashSimpleFillDuotoneProps };
