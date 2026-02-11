import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert-duotone" {...props}>
      <path fillRule="evenodd" d="M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V5.44c0-.32.2-.6.49-.7zM5.25 5.96v4.71a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a10.5 10.5 0 0 0 5.8-9.39V5.96L12 3.43z" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.75c.41 0 .75.34.75.75V12a.75.75 0 0 1-1.5 0V7.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ShieldAlertRegularDuotone.displayName = 'ShieldAlertRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldAlertRegularDuotone, ShieldAlertRegularDuotone as ShieldAlertRegularDuotoneIcon, ShieldAlertRegularDuotone as SiShieldAlertRegularDuotone };
export default ShieldAlertRegularDuotone;
export type { ShieldAlertRegularDuotoneProps };
