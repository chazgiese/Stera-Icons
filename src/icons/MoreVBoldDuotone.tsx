import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 21.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </IconBase>
  ))
);

MoreVBoldDuotone.displayName = 'MoreVBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreVBoldDuotone, MoreVBoldDuotone as MoreVBoldDuotoneIcon, MoreVBoldDuotone as SiMoreVBoldDuotone };
export default MoreVBoldDuotone;
export type { MoreVBoldDuotoneProps };
