import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldFillProps = Omit<IconBaseProps, 'children'>;

const ShieldFill = memo(
  forwardRef<SVGSVGElement, ShieldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-fill" {...props}>
      <path fill="currentColor" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3z" />
    </IconBase>
  ))
);

ShieldFill.displayName = 'ShieldFill';

// Triple export pattern (lucide-react style)
export { ShieldFill, ShieldFill as ShieldFillIcon, ShieldFill as SiShieldFill };
export default ShieldFill;
export type { ShieldFillProps };
