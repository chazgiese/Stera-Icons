import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFill = memo(
  forwardRef<SVGSVGElement, CircleNotchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill" {...props}>
      <path fill="currentColor" d="M17.3 4.58a1.5 1.5 0 0 1 2.13 0 10.5 10.5 0 1 1-14.85 0A1.5 1.5 0 0 1 6.7 6.7a7.5 7.5 0 1 0 10.6 0 1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CircleNotchFill.displayName = 'CircleNotchFill';

// Triple export pattern (lucide-react style)
export { CircleNotchFill, CircleNotchFill as CircleNotchFillIcon, CircleNotchFill as SiCircleNotchFill };
export default CircleNotchFill;
export type { CircleNotchFillProps };
