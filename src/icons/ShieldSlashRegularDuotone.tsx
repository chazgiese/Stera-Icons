import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash-duotone" {...props}>
      <path d="M4.5 8c.41 0 .75.33.75.74v1.93a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48q.97-.5 1.83-1.16a.75.75 0 0 1 .93 1.17 12 12 0 0 1-2.1 1.34l-1.27.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V8.74c0-.41.34-.75.75-.75M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23q-.01 2.17-.74 4.15a.75.75 0 0 1-1.4-.52q.63-1.72.64-3.63V5.96L12 3.43l-3.47 1.3a.75.75 0 0 1-.52-1.4z" opacity={0.4} />
        <path d="M2.47 2.47c.3-.3.77-.3 1.06 0l17 17a.75.75 0 1 1-1.06 1.06l-17-17a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ShieldSlashRegularDuotone.displayName = 'ShieldSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldSlashRegularDuotone, ShieldSlashRegularDuotone as ShieldSlashRegularDuotoneIcon, ShieldSlashRegularDuotone as SiShieldSlashRegularDuotone };
export default ShieldSlashRegularDuotone;
export type { ShieldSlashRegularDuotoneProps };
