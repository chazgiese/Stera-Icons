import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclesThreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circles-three-fill-duotone" {...props}>
      <path d="M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" opacity={.4} />
        <path d="M6.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

CirclesThreeFillDuotone.displayName = 'CirclesThreeFillDuotone';

// Triple export pattern (lucide-react style)
export { CirclesThreeFillDuotone, CirclesThreeFillDuotone as CirclesThreeFillDuotoneIcon, CirclesThreeFillDuotone as SiCirclesThreeFillDuotone };
export default CirclesThreeFillDuotone;
export type { CirclesThreeFillDuotoneProps };
