import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldSlashFillProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFill = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-fill" {...props}>
      <path fill="currentColor" d="M16.32 20.57a13 13 0 0 1-2.5 1.64l-1.37.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V7.24zM2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 1 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58q-.02 2.72-1.05 5.12L7.04 2.8l4.6-1.74z" />
    </IconBase>
  ))
);

ShieldSlashFill.displayName = 'ShieldSlashFill';

// Triple export pattern (lucide-react style)
export { ShieldSlashFill, ShieldSlashFill as ShieldSlashFillIcon, ShieldSlashFill as SiShieldSlashFill };
export default ShieldSlashFill;
export type { ShieldSlashFillProps };
