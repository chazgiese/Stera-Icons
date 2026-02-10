import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 4a8 8 0 1 0 0 16v2a10 10 0 0 1 0-20z" />
        <path fill="currentColor" d="M12 2a10 10 0 0 1 0 20v-2a8 8 0 1 0 0-16z" opacity={.4} />
    </IconBase>
  ))
);

CircleBoldDuotone.displayName = 'CircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleBoldDuotone, CircleBoldDuotone as CircleBoldDuotoneIcon, CircleBoldDuotone as SiCircleBoldDuotone };
export default CircleBoldDuotone;
export type { CircleBoldDuotoneProps };
