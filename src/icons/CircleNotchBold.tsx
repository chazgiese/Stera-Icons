import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBold = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-bold" {...props}>
      <path fill="currentColor" d="M17.66 4.93a1 1 0 0 1 1.41 0 10 10 0 1 1-14.14 0 1 1 0 0 1 1.41 1.41 8 8 0 1 0 11.32 0 1 1 0 0 1 0-1.41" />
    </IconBase>
  ))
);

CircleNotchBold.displayName = 'CircleNotchBold';

// Triple export pattern (lucide-react style)
export { CircleNotchBold, CircleNotchBold as CircleNotchBoldIcon, CircleNotchBold as SiCircleNotchBold };
export default CircleNotchBold;
export type { CircleNotchBoldProps };
