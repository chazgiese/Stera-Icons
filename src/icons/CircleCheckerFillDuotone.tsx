import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-fill-duotone" {...props}>
      <path d="" />
    </IconBase>
  ))
);

CircleCheckerFillDuotone.displayName = 'CircleCheckerFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleCheckerFillDuotone, CircleCheckerFillDuotone as CircleCheckerFillDuotoneIcon, CircleCheckerFillDuotone as SiCircleCheckerFillDuotone };
export default CircleCheckerFillDuotone;
export type { CircleCheckerFillDuotoneProps };
