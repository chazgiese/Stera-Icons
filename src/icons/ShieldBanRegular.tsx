import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldBanRegular = memo(
  forwardRef<SVGSVGElement, ShieldBanRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82c.3.1.49.38.49.7v5.23a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V5.43l.02-.11a.8.8 0 0 1 .47-.59zm-6.49 8.75a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48c1.51-.76 2.8-1.86 3.76-3.18L5.25 7.06zm.7-4.98 11.57 9.9c.8-1.48 1.23-3.17 1.23-4.92V5.96L12 3.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanRegular.displayName = 'ShieldBanRegular';

// Triple export pattern (lucide-react style)
export { ShieldBanRegular, ShieldBanRegular as ShieldBanRegularIcon, ShieldBanRegular as SiShieldBanRegular };
export default ShieldBanRegular;
export type { ShieldBanRegularProps };
