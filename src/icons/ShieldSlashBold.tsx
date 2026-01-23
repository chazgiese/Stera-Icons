import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashBold = memo(
  forwardRef<SVGSVGElement, ShieldSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-bold" {...props}>
      <path fill="currentColor" d="M4 7.96a1 1 0 0 1 1 1v2.02a11 11 0 0 0 6.08 9.44l.92.46.92-.46q.9-.45 1.7-1.05a1 1 0 0 1 1.2 1.6 13 13 0 0 1-2 1.24l-1.37.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 11.04L3 10.58V8.96a1 1 0 0 1 1-1M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 1 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58q-.01 2.17-.68 4.16a1 1 0 0 1-1.9-.64 11 11 0 0 0 .58-3.52V5.7l-7-2.62L8.68 4.3a1 1 0 0 1-.7-1.87l3.67-1.38z" />
    </IconBase>
  ))
);

ShieldSlashBold.displayName = 'ShieldSlashBold';

// Triple export pattern (lucide-react style)
export { ShieldSlashBold, ShieldSlashBold as ShieldSlashBoldIcon, ShieldSlashBold as SiShieldSlashBold };
export default ShieldSlashBold;
export type { ShieldSlashBoldProps };
