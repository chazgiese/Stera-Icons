import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM12 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7.5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ShieldAlertFillDuotone.displayName = 'ShieldAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertFillDuotone, ShieldAlertFillDuotone as ShieldAlertFillDuotoneIcon, ShieldAlertFillDuotone as SiShieldAlertFillDuotone };
export default ShieldAlertFillDuotone;
export type { ShieldAlertFillDuotoneProps };
