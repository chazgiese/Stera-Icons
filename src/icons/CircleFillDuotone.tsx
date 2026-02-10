import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleFillDuotone.displayName = 'CircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleFillDuotone, CircleFillDuotone as CircleFillDuotoneIcon, CircleFillDuotone as SiCircleFillDuotone };
export default CircleFillDuotone;
export type { CircleFillDuotoneProps };
