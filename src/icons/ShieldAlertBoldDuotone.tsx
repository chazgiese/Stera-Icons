import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v4.54c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V6.13L12 3.7z" clipRule="evenodd" opacity={.4} />
        <path d="M12 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ShieldAlertBoldDuotone.displayName = 'ShieldAlertBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertBoldDuotone, ShieldAlertBoldDuotone as ShieldAlertBoldDuotoneIcon, ShieldAlertBoldDuotone as SiShieldAlertBoldDuotone };
export default ShieldAlertBoldDuotone;
export type { ShieldAlertBoldDuotoneProps };
