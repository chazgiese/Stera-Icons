import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegular = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-simple" {...props}>
      <path d="M16.13 19.15a.75.75 0 0 1 .75 1.3 9.7 9.7 0 0 1-9.76 0 .75.75 0 1 1 .75-1.3 8.2 8.2 0 0 0 8.25 0M3.56 7.12a.75.75 0 1 1 1.3.75 8.2 8.2 0 0 0 0 8.25.75.75 0 0 1-1.3.76 9.7 9.7 0 0 1 0-9.76M19.42 6.85a.75.75 0 0 1 1.02.27 9.7 9.7 0 0 1 0 9.76.75.75 0 1 1-1.3-.75 8.2 8.2 0 0 0 0-8.25.75.75 0 0 1 .28-1.03M12 2.25a9.7 9.7 0 0 1 4.88 1.3.75.75 0 1 1-.75 1.3 8.2 8.2 0 0 0-8.25 0 .75.75 0 0 1-.76-1.3A9.7 9.7 0 0 1 12 2.26" />
    </IconBase>
  ))
);

CircleDashSimpleRegular.displayName = 'CircleDashSimpleRegular';

// Triple export pattern (lucide-react style)
export { CircleDashSimpleRegular, CircleDashSimpleRegular as CircleDashSimpleRegularIcon, CircleDashSimpleRegular as SiCircleDashSimpleRegular };
export default CircleDashSimpleRegular;
export type { CircleDashSimpleRegularProps };
