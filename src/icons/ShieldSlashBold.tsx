import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashBold = memo(
  forwardRef<SVGSVGElement, ShieldSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-bold" {...props}>
      <path d="M4.5 7.74a1 1 0 0 1 1 1v1.93c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42q.97-.48 1.8-1.14a1 1 0 0 1 1.23 1.57q-.98.79-2.13 1.36l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V8.74a1 1 0 0 1 1-1M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23q0 2.22-.76 4.24a1 1 0 0 1-1.87-.7q.62-1.67.63-3.54V6.13L12 3.7 8.62 4.96a1 1 0 0 1-.7-1.87l3.73-1.4z" />
    </IconBase>
  ))
);

ShieldSlashBold.displayName = 'ShieldSlashBold';

// Triple export pattern (lucide-react style)
export { ShieldSlashBold, ShieldSlashBold as ShieldSlashBoldIcon, ShieldSlashBold as SiShieldSlashBold };
export default ShieldSlashBold;
export type { ShieldSlashBoldProps };
