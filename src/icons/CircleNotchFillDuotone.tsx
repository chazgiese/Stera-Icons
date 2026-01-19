import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleNotchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.57.51a11.5 11.5 0 0 1 7.56 3.36 1.5 1.5 0 0 0-2.12 2.12A8.5 8.5 0 0 0 6 5.99a1.5 1.5 0 0 0-2.12-2.12A11.5 11.5 0 0 1 11.43.5L12 .5z" opacity={.4} />
        <path fill="currentColor" d="M18.01 3.87a1.5 1.5 0 0 1 2.12 0 11.5 11.5 0 1 1-16.26 0 1.5 1.5 0 0 1 2.12 2.12 8.5 8.5 0 1 0 12.02 0 1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CircleNotchFillDuotone.displayName = 'CircleNotchFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleNotchFillDuotone, CircleNotchFillDuotone as CircleNotchFillDuotoneIcon, CircleNotchFillDuotone as SiCircleNotchFillDuotone };
export default CircleNotchFillDuotone;
export type { CircleNotchFillDuotoneProps };
