import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliBoldDuotone = memo(
  forwardRef<SVGSVGElement, CliBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-bold-duotone" {...props}>
      <path fill="currentColor" d="M20 17.5a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M3.3 4.8a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l5.29-5.3-5.3-5.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CliBoldDuotone.displayName = 'CliBoldDuotone';

// Triple export pattern (lucide-react style)
export { CliBoldDuotone, CliBoldDuotone as CliBoldDuotoneIcon, CliBoldDuotone as SiCliBoldDuotone };
export default CliBoldDuotone;
export type { CliBoldDuotoneProps };
