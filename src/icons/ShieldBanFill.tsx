import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanFillProps = Omit<IconBaseProps, 'children'>;

const ShieldBanFill = memo(
  forwardRef<SVGSVGElement, ShieldBanFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-fill" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v.16l11.45 9.8c1-1.6 1.55-3.46 1.55-5.42V6.13L12 3.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanFill.displayName = 'ShieldBanFill';

// Triple export pattern (lucide-react style)
export { ShieldBanFill, ShieldBanFill as ShieldBanFillIcon, ShieldBanFill as SiShieldBanFill };
export default ShieldBanFill;
export type { ShieldBanFillProps };
