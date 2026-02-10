import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleVFillDuotone.displayName = 'MoreCircleVFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleVFillDuotone, MoreCircleVFillDuotone as MoreCircleVFillDuotoneIcon, MoreCircleVFillDuotone as SiMoreCircleVFillDuotone };
export default MoreCircleVFillDuotone;
export type { MoreCircleVFillDuotoneProps };
