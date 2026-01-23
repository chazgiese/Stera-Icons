import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFill = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldAlertFill.displayName = 'ShieldAlertFill';

// Triple export pattern (lucide-react style)
export { ShieldAlertFill, ShieldAlertFill as ShieldAlertFillIcon, ShieldAlertFill as SiShieldAlertFill };
export default ShieldAlertFill;
export type { ShieldAlertFillProps };
