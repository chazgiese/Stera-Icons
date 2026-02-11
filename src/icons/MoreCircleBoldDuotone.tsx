import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreCircleBoldDuotone.displayName = 'MoreCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleBoldDuotone, MoreCircleBoldDuotone as MoreCircleBoldDuotoneIcon, MoreCircleBoldDuotone as SiMoreCircleBoldDuotone };
export default MoreCircleBoldDuotone;
export type { MoreCircleBoldDuotoneProps };
