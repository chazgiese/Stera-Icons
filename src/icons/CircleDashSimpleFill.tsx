import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleFill = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple-fill" {...props}>
      <path d="M16 18.93a1 1 0 0 1 1 1.73 10 10 0 0 1-10 0 1 1 0 0 1 1-1.73 8 8 0 0 0 8 0M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12M3.34 7a1 1 0 0 1 1.73 1 8 8 0 0 0 0 8 1 1 0 0 1-1.73 1 10 10 0 0 1 0-10M19.3 6.63a1 1 0 0 1 1.36.37 10 10 0 0 1 0 10 1 1 0 0 1-1.73-1 8 8 0 0 0 0-8 1 1 0 0 1 .36-1.37M12 2c1.82 0 3.53.49 5 1.34a1 1 0 0 1-1 1.73 8 8 0 0 0-8 0 1 1 0 0 1-1-1.73A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

CircleDashSimpleFill.displayName = 'CircleDashSimpleFill';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleFill, CircleDashSimpleFill as CircleDashSimpleFillIcon, CircleDashSimpleFill as SiCircleDashSimpleFill };
export default CircleDashSimpleFill;
export type { CircleDashSimpleFillProps };
