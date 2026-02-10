import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBanBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v4.54c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V6.13L12 3.7z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.44 15.2q-.45.92-1.07 1.72L5.5 7.6V6.13l.94-.35z" />
    </IconBase>
  ))
);

ShieldBanBoldDuotone.displayName = 'ShieldBanBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBanBoldDuotone, ShieldBanBoldDuotone as ShieldBanBoldDuotoneIcon, ShieldBanBoldDuotone as SiShieldBanBoldDuotone };
export default ShieldBanBoldDuotone;
export type { ShieldBanBoldDuotoneProps };
