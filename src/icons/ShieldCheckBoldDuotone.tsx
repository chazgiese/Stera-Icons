import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-check-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v4.54c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V6.13L12 3.7z" clipRule="evenodd" opacity={.4} />
        <path d="M14.32 9.27a1 1 0 1 1 1.36 1.46l-3.62 3.4-.33.3q-.18.17-.55.29a1.5 1.5 0 0 1-.97-.07c-.24-.1-.4-.26-.51-.37q-.15-.16-.28-.33l-1.2-1.5a1 1 0 0 1 1.56-1.26l1.07 1.34z" />
    </IconBase>
  ))
);

ShieldCheckBoldDuotone.displayName = 'ShieldCheckBoldDuotone';

// Triple export pattern (lucide-react style)
export { ShieldCheckBoldDuotone, ShieldCheckBoldDuotone as ShieldCheckBoldDuotoneIcon, ShieldCheckBoldDuotone as SiShieldCheckBoldDuotone };
export default ShieldCheckBoldDuotone;
export type { ShieldCheckBoldDuotoneProps };
