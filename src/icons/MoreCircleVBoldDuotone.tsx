import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleVBoldDuotone.displayName = 'MoreCircleVBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleVBoldDuotone, MoreCircleVBoldDuotone as MoreCircleVBoldDuotoneIcon, MoreCircleVBoldDuotone as SiMoreCircleVBoldDuotone };
export default MoreCircleVBoldDuotone;
export type { MoreCircleVBoldDuotoneProps };
