import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-bold-duotone" {...props}>
      <path d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81h.01a1 1 0 0 0-1.36.94v.7L12 3.68 5.5 6.13v-.7a1 1 0 0 0-1.36-.92l7.5-2.82z" opacity={.4} />
        <path d="M19.5 4.44a1 1 0 0 1 1 1v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 2 0v5.23c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V5.44a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ShieldBoldDuotone.displayName = 'ShieldBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBoldDuotone, ShieldBoldDuotone as ShieldBoldDuotoneIcon, ShieldBoldDuotone as SiShieldBoldDuotone };
export default ShieldBoldDuotone;
export type { ShieldBoldDuotoneProps };
