import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-fill-duotone" {...props}>
      <path d="M11 21.95a10 10 0 0 1 0-19.9zM13 2.05a10 10 0 0 1 0 19.9z" opacity={0.4} />
        <path fill="currentColor" d="M12 2q.5 0 1 .05v19.9a10 10 0 0 1-2 0V2.05Q11.5 2 12 2" />
    </IconBase>
  ))
);

CircleDivideFillDuotone.displayName = 'CircleDivideFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideFillDuotone, CircleDivideFillDuotone as CircleDivideFillDuotoneIcon, CircleDivideFillDuotone as SiCircleDivideFillDuotone };
export default CircleDivideFillDuotone;
export type { CircleDivideFillDuotoneProps };
