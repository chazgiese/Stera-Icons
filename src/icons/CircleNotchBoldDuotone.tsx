import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-bold-duotone" {...props}>
      <path fill="currentColor" d="M12.54 1.01a11 11 0 0 1 7.24 3.21 1 1 0 0 0-1.42 1.4 9 9 0 0 0-12.72.02 1 1 0 0 0-1.4-1.43A11 11 0 0 1 11.46 1L12 1z" opacity={.4} />
        <path fill="currentColor" d="M18.36 4.22a1 1 0 0 1 1.42 0 11 11 0 1 1-15.56 0 1 1 0 0 1 1.42 1.42 9 9 0 1 0 12.72 0 1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

CircleNotchBoldDuotone.displayName = 'CircleNotchBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchBoldDuotone, CircleNotchBoldDuotone as CircleNotchBoldDuotoneIcon, CircleNotchBoldDuotone as SiCircleNotchBoldDuotone };
export default CircleNotchBoldDuotone;
export type { CircleNotchBoldDuotoneProps };
