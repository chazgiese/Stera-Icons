import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-bold-duotone" {...props}>
      <path d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 0 19 5v.7l-7-2.63-7 2.62V5a1 1 0 0 0-1.37-.93h.02l8-3zM3.22 4.38" opacity={0.4} />
        <path fill="currentColor" d="M20 4a1 1 0 0 1 1 1v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 2 0v5.58a11 11 0 0 0 6.08 9.84l.92.46.92-.46A11 11 0 0 0 19 10.58V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ShieldBoldDuotone.displayName = 'ShieldBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBoldDuotone, ShieldBoldDuotone as ShieldBoldDuotoneIcon, ShieldBoldDuotone as SiShieldBoldDuotone };
export type { ShieldBoldDuotoneProps };
