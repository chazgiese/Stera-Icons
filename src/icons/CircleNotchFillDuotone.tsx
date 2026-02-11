import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill-duotone" {...props}>
      <path d="M12 1.5a10.5 10.5 0 0 1 7.42 3.08A1.5 1.5 0 0 0 17.3 6.7a7.5 7.5 0 0 0-10.6 0 1.5 1.5 0 1 0-2.12-2.12A10.5 10.5 0 0 1 12 1.5" opacity={.4} />
        <path d="M17.3 4.58a1.5 1.5 0 0 1 2.12 0 10.5 10.5 0 1 1-14.84 0A1.5 1.5 0 0 1 6.7 6.7a7.5 7.5 0 1 0 10.6 0 1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CircleNotchFillDuotone.displayName = 'CircleNotchFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchFillDuotone, CircleNotchFillDuotone as CircleNotchFillDuotoneIcon, CircleNotchFillDuotone as SiCircleNotchFillDuotone };
export default CircleNotchFillDuotone;
export type { CircleNotchFillDuotoneProps };
