import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v-duotone" {...props}>
      <path fill="currentColor" d="M12 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </IconBase>
  ))
);

MoreVRegularDuotone.displayName = 'MoreVRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreVRegularDuotone, MoreVRegularDuotone as MoreVRegularDuotoneIcon, MoreVRegularDuotone as SiMoreVRegularDuotone };
export default MoreVRegularDuotone;
export type { MoreVRegularDuotoneProps };
