import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldFillProps = Omit<IconBaseProps, 'children'>;

const ShieldFill = memo(
  forwardRef<SVGSVGElement, ShieldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-fill" {...props}>
      <path fill="currentColor" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81z" />
    </IconBase>
  ))
);

ShieldFill.displayName = 'ShieldFill';

// Triple export pattern (lucide-react style)
export { ShieldFill, ShieldFill as ShieldFillIcon, ShieldFill as SiShieldFill };
export default ShieldFill;
export type { ShieldFillProps };
