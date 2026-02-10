import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-fill-duotone" {...props}>
      <path d="M17.4 18.81a12 12 0 0 1-3.67 2.82l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44A1 1 0 0 1 3.6 5zM11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 2.36-.68 4.61-1.89 6.53L5.43 4.02l6.22-2.33z" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l17 17a1 1 0 0 1-1.4 1.4l-17-17a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashFillDuotone.displayName = 'ShieldSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashFillDuotone, ShieldSlashFillDuotone as ShieldSlashFillDuotoneIcon, ShieldSlashFillDuotone as SiShieldSlashFillDuotone };
export default ShieldSlashFillDuotone;
export type { ShieldSlashFillDuotoneProps };
