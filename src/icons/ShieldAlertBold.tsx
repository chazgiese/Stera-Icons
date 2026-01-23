import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertBold = memo(
  forwardRef<SVGSVGElement, ShieldAlertBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-bold" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM5 5.69v4.9a11 11 0 0 0 6.08 9.83l.92.46.92-.46A11 11 0 0 0 19 10.58V5.7l-7-2.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldAlertBold.displayName = 'ShieldAlertBold';

// Triple export pattern (lucide-react style)
export { ShieldAlertBold, ShieldAlertBold as ShieldAlertBoldIcon, ShieldAlertBold as SiShieldAlertBold };
export default ShieldAlertBold;
export type { ShieldAlertBoldProps };
