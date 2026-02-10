import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
        <path fill="currentColor" d="M19.94 11a8 8 0 0 1 0 2H4.06a8 8 0 0 1 0-2z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideAltBoldDuotone.displayName = 'CircleDivideAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideAltBoldDuotone, CircleDivideAltBoldDuotone as CircleDivideAltBoldDuotoneIcon, CircleDivideAltBoldDuotone as SiCircleDivideAltBoldDuotone };
export default CircleDivideAltBoldDuotone;
export type { CircleDivideAltBoldDuotoneProps };
