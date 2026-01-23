import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13 3.05a9 9 0 0 0-2 0V11H3.05a9 9 0 0 0 0 2H11v7.95a9 9 0 0 0 2 0V13h7.95a9 9 0 0 0 0-2H13z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBoldDuotone.displayName = 'CircleDivideCrossBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossBoldDuotone, CircleDivideCrossBoldDuotone as CircleDivideCrossBoldDuotoneIcon, CircleDivideCrossBoldDuotone as SiCircleDivideCrossBoldDuotone };
export default CircleDivideCrossBoldDuotone;
export type { CircleDivideCrossBoldDuotoneProps };
