import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-duotone" {...props}>
      <path d="M4 8.2c.41 0 .75.34.75.76v1.62c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51q.93-.46 1.73-1.08a.75.75 0 1 1 .9 1.2q-.9.7-1.96 1.22l-1.36.68q-.34.15-.68 0L10.3 22a12.8 12.8 0 0 1-7.05-11.4V8.95c0-.42.34-.75.75-.75M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58q0 2.12-.67 4.08a.75.75 0 1 1-1.42-.48q.59-1.72.59-3.6V5.52L12 2.8 8.59 4.08a.75.75 0 0 1-.53-1.4z" opacity={0.4} />
        <path fill="currentColor" d="M2.47 2.47c.3-.3.77-.3 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ShieldSlashRegularDuotone.displayName = 'ShieldSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashRegularDuotone, ShieldSlashRegularDuotone as ShieldSlashRegularDuotoneIcon, ShieldSlashRegularDuotone as SiShieldSlashRegularDuotone };
export default ShieldSlashRegularDuotone;
export type { ShieldSlashRegularDuotoneProps };
