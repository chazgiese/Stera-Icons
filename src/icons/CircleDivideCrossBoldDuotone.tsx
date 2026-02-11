import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-bold-duotone" {...props}>
      <path d="M12 4q.5 0 1 .06V11h6.94a8 8 0 0 1 0 2H13v6.94a8 8 0 0 1-2 0V13H4.06a8 8 0 0 1 0-2H11V4.06Q11.5 4 12 4" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBoldDuotone.displayName = 'CircleDivideCrossBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossBoldDuotone, CircleDivideCrossBoldDuotone as CircleDivideCrossBoldDuotoneIcon, CircleDivideCrossBoldDuotone as SiCircleDivideCrossBoldDuotone };
export default CircleDivideCrossBoldDuotone;
export type { CircleDivideCrossBoldDuotoneProps };
