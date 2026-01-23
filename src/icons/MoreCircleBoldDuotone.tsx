import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleBoldDuotone.displayName = 'MoreCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleBoldDuotone, MoreCircleBoldDuotone as MoreCircleBoldDuotoneIcon, MoreCircleBoldDuotone as SiMoreCircleBoldDuotone };
export default MoreCircleBoldDuotone;
export type { MoreCircleBoldDuotoneProps };
