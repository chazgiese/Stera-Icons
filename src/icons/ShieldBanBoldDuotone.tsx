import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBanBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-bold-duotone" {...props}>
      <path d="M17.82 15.53q-.45.9-1.07 1.72L5 7.17V5.7l.93-.35zM3.2 4.4l.04-.05.01-.01z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM5 5.69v4.9a11 11 0 0 0 6.08 9.83l.92.46.92-.46A11 11 0 0 0 19 10.58V5.7l-7-2.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanBoldDuotone.displayName = 'ShieldBanBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBanBoldDuotone, ShieldBanBoldDuotone as ShieldBanBoldDuotoneIcon, ShieldBanBoldDuotone as SiShieldBanBoldDuotone };
export default ShieldBanBoldDuotone;
export type { ShieldBanBoldDuotoneProps };
