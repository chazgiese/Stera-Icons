import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegular = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash" {...props}>
      <path d="M4.5 8c.41 0 .75.33.75.74v1.93a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a11 11 0 0 0 1.83-1.16.75.75 0 0 1 .93 1.17 12 12 0 0 1-2.1 1.34l-1.28.64c-.2.1-.45.1-.67 0l-1.28-.64a12 12 0 0 1-6.63-10.74V8.74c0-.41.34-.75.75-.75M2.47 2.47c.3-.3.77-.3 1.06 0l17 17a.75.75 0 0 1-1.06 1.06l-17-17a.75.75 0 0 1 0-1.06M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23q-.01 2.17-.74 4.15a.75.75 0 0 1-1.4-.52q.63-1.72.64-3.63V5.96L12 3.43l-3.47 1.3a.75.75 0 0 1-.52-1.4z" />
    </IconBase>
  ))
);

ShieldSlashRegular.displayName = 'ShieldSlashRegular';

// Triple export pattern (lucide-react style)
export { ShieldSlashRegular, ShieldSlashRegular as ShieldSlashRegularIcon, ShieldSlashRegular as SiShieldSlashRegular };
export default ShieldSlashRegular;
export type { ShieldSlashRegularProps };
