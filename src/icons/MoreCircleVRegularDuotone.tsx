import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleVRegularDuotone.displayName = 'MoreCircleVRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleVRegularDuotone, MoreCircleVRegularDuotone as MoreCircleVRegularDuotoneIcon, MoreCircleVRegularDuotone as SiMoreCircleVRegularDuotone };
export default MoreCircleVRegularDuotone;
export type { MoreCircleVRegularDuotoneProps };
