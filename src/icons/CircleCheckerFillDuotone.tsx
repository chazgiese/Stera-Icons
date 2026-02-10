import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-fill-duotone" {...props}>
      <path fill="currentColor" opacity={.4} d="M2,12a10,10,0,1,0,20,0a10,10,0,1,0,-20,0z" />
    </IconBase>
  ))
);

CircleCheckerFillDuotone.displayName = 'CircleCheckerFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerFillDuotone, CircleCheckerFillDuotone as CircleCheckerFillDuotoneIcon, CircleCheckerFillDuotone as SiCircleCheckerFillDuotone };
export default CircleCheckerFillDuotone;
export type { CircleCheckerFillDuotoneProps };
