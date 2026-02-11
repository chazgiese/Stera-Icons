import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-duotone" {...props}>
      <path d="M21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        <path opacity={.4} d="M10.5,12a1.5,1.5,0,1,0,3,0a1.5,1.5,0,1,0,-3,0z" />
    </IconBase>
  ))
);

MoreRegularDuotone.displayName = 'MoreRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreRegularDuotone, MoreRegularDuotone as MoreRegularDuotoneIcon, MoreRegularDuotone as SiMoreRegularDuotone };
export default MoreRegularDuotone;
export type { MoreRegularDuotoneProps };
