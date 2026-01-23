import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertRegular = memo(
  forwardRef<SVGSVGElement, ShieldAlertRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-alert" {...props}>
      <path fill="currentColor" d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7q-.34.15-.68 0l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V5c0-.31.2-.6.49-.7zM4.75 5.52v5.06c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51c3.81-1.91 6.22-5.8 6.22-10.07V5.52L12 2.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldAlertRegular.displayName = 'ShieldAlertRegular';

// Triple export pattern (lucide-react style)
export { ShieldAlertRegular, ShieldAlertRegular as ShieldAlertRegularIcon, ShieldAlertRegular as SiShieldAlertRegular };
export default ShieldAlertRegular;
export type { ShieldAlertRegularProps };
