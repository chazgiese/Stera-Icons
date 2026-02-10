import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-fill-duotone" {...props}>
      <path d="M21.95 13a10 10 0 0 1-19.9 0zM12 2a10 10 0 0 1 9.95 9H2.05A10 10 0 0 1 12 2" opacity={0.4} />
        <path fill="currentColor" d="M21.95 11a10 10 0 0 1 0 2H2.05a10 10 0 0 1 0-2z" />
    </IconBase>
  ))
);

CircleDivideAltFillDuotone.displayName = 'CircleDivideAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideAltFillDuotone, CircleDivideAltFillDuotone as CircleDivideAltFillDuotoneIcon, CircleDivideAltFillDuotone as SiCircleDivideAltFillDuotone };
export default CircleDivideAltFillDuotone;
export type { CircleDivideAltFillDuotoneProps };
