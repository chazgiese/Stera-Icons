import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-bold-duotone" {...props}>
      <path d="M12 2a10 10 0 0 1 7.07 2.93 1 1 0 0 0-1.41 1.41 8 8 0 0 0-11.32 0 1 1 0 1 0-1.41-1.41A10 10 0 0 1 12 2" opacity={.4} />
        <path d="M17.66 4.93a1 1 0 0 1 1.41 0 10 10 0 1 1-14.14 0 1 1 0 0 1 1.41 1.41 8 8 0 1 0 11.32 0 1 1 0 0 1 0-1.41" />
    </IconBase>
  ))
);

CircleNotchBoldDuotone.displayName = 'CircleNotchBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchBoldDuotone, CircleNotchBoldDuotone as CircleNotchBoldDuotoneIcon, CircleNotchBoldDuotone as SiCircleNotchBoldDuotone };
export default CircleNotchBoldDuotone;
export type { CircleNotchBoldDuotoneProps };
