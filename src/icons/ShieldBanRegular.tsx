import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBanRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldBanRegular = memo(
  forwardRef<SVGSVGElement, ShieldBanRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7q-.34.15-.68 0l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V4.9l.04-.13v-.02a1 1 0 0 1 .16-.25v-.01l.03-.03.17-.12.05-.03.04-.01zm-6.99 9.28c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51a11 11 0 0 0 4.06-3.44L4.75 6.63zm.7-5.32L17.9 15.93a11 11 0 0 0 1.35-5.35V5.52L12 2.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanRegular.displayName = 'ShieldBanRegular';

// Triple export pattern (lucide-react style)
export { ShieldBanRegular, ShieldBanRegular as ShieldBanRegularIcon, ShieldBanRegular as SiShieldBanRegular };
export default ShieldBanRegular;
export type { ShieldBanRegularProps };
