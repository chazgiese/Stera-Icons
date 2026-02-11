import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotsFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dots-fill-duotone" {...props}>
      <path d="M12 19a2 2 0 0 1 0 4 2 2 0 0 1 0-4M4.22 16.95a2 2 0 1 1 0 2.83 2 2 0 0 1 0-2.83M16.95 16.95a2 2 0 0 1 2.83 2.82v.01a2 2 0 1 1-2.83-2.83M3 10A2 2 0 1 1 1 12v-.02c0-1.1.9-2 2-2M21 10a2 2 0 1 1-2 2c0-1.1.9-2 2-2M4.23 4.22a2 2 0 1 1 2.82 2.83 2 2 0 0 1-2.83-2.82zM16.95 4.22a2 2 0 0 1 2.82 0h.01a2 2 0 1 1-2.83 2.83 2 2 0 0 1 0-2.83M12 1a2 2 0 0 1 0 4 2 2 0 0 1 0-4" opacity={0.4} />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

CircleDotsFillDuotone.displayName = 'CircleDotsFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDotsFillDuotone, CircleDotsFillDuotone as CircleDotsFillDuotoneIcon, CircleDotsFillDuotone as SiCircleDotsFillDuotone };
export default CircleDotsFillDuotone;
export type { CircleDotsFillDuotoneProps };
