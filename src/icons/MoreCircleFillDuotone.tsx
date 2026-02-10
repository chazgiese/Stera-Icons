import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-4.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreCircleFillDuotone.displayName = 'MoreCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleFillDuotone, MoreCircleFillDuotone as MoreCircleFillDuotoneIcon, MoreCircleFillDuotone as SiMoreCircleFillDuotone };
export default MoreCircleFillDuotone;
export type { MoreCircleFillDuotoneProps };
