import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegular = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch" {...props}>
      <path d="M17.83 5.1c.3-.29.77-.29 1.06 0a9.75 9.75 0 1 1-13.78 0 .75.75 0 0 1 1.06 1.07 8.25 8.25 0 1 0 11.66 0 .75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegular.displayName = 'CircleNotchRegular';

// Triple export pattern (lucide-react style)
export { CircleNotchRegular, CircleNotchRegular as CircleNotchRegularIcon, CircleNotchRegular as SiCircleNotchRegular };
export default CircleNotchRegular;
export type { CircleNotchRegularProps };
