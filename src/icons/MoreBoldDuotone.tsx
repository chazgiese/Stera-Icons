import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-bold-duotone" {...props}>
      <path d="M21.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <path opacity={.4} d="M10,12a2,2,0,1,0,4,0a2,2,0,1,0,-4,0z" />
    </IconBase>
  ))
);

MoreBoldDuotone.displayName = 'MoreBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreBoldDuotone, MoreBoldDuotone as MoreBoldDuotoneIcon, MoreBoldDuotone as SiMoreBoldDuotone };
export default MoreBoldDuotone;
export type { MoreBoldDuotoneProps };
