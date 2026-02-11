import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreCircleRegularDuotone.displayName = 'MoreCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleRegularDuotone, MoreCircleRegularDuotone as MoreCircleRegularDuotoneIcon, MoreCircleRegularDuotone as SiMoreCircleRegularDuotone };
export default MoreCircleRegularDuotone;
export type { MoreCircleRegularDuotoneProps };
