import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldSlashRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashRegular = memo(
  forwardRef<SVGSVGElement, ShieldSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-slash" {...props}>
      <path fill="currentColor" d="M4 6.8c.41 0 .75.33.75.75v3.03c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51q1.36-.69 2.47-1.68a.75.75 0 0 1 1 1.12q-1.25 1.11-2.8 1.9l-1.36.68q-.34.15-.67 0L10.3 22a12.8 12.8 0 0 1-7.05-11.4V7.54c0-.42.34-.75.75-.75M2.47 2.47c.3-.3.77-.3 1.06 0l18 18a.75.75 0 0 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58c0 1.81-.38 3.57-1.1 5.16a.75.75 0 0 1-1.36-.6c.62-1.41.96-2.96.96-4.56V5.52L12 2.8 7.56 4.46a.75.75 0 1 1-.52-1.4z" />
    </IconBase>
  ))
);

ShieldSlashRegular.displayName = 'ShieldSlashRegular';

// Triple export pattern (lucide-react style)
export { ShieldSlashRegular, ShieldSlashRegular as ShieldSlashRegularIcon, ShieldSlashRegular as SiShieldSlashRegular };
export type { ShieldSlashRegularProps };
