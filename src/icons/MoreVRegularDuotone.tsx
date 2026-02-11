import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v-duotone" {...props}>
      <path d="M12 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        <path opacity={.4} transform="rotate(90 12 12)" d="M10.5,12a1.5,1.5,0,1,0,3,0a1.5,1.5,0,1,0,-3,0z" />
    </IconBase>
  ))
);

MoreVRegularDuotone.displayName = 'MoreVRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreVRegularDuotone, MoreVRegularDuotone as MoreVRegularDuotoneIcon, MoreVRegularDuotone as SiMoreVRegularDuotone };
export default MoreVRegularDuotone;
export type { MoreVRegularDuotoneProps };
