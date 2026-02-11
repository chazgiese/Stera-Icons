import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-check-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M18.5 6.13v4.54c0 3.88-2.2 7.43-5.67 9.17l-.83.42-.83-.42a10.3 10.3 0 0 1-5.67-9.17V6.13L12 3.7zm-2.77 3.19a1 1 0 0 0-1.41-.05l-3.47 3.26-1.07-1.34a1 1 0 1 0-1.56 1.25l1.2 1.5q.13.18.28.34.15.18.5.37.48.2.98.06c.25-.06.43-.19.55-.28l.33-.3 3.62-3.4a1 1 0 0 0 .05-1.41" clipRule="evenodd" opacity={.4} />
        <path d="M14.32 9.27a1 1 0 1 1 1.36 1.46l-3.62 3.4-.33.3a1.5 1.5 0 0 1-1.52.22c-.24-.1-.4-.26-.51-.37q-.15-.17-.28-.33l-1.2-1.5a1 1 0 0 1 1.56-1.26l1.07 1.34z" />
        <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v4.54c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42a10.3 10.3 0 0 0 5.67-9.17V6.13L12 3.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckFillDuotone.displayName = 'ShieldCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldCheckFillDuotone, ShieldCheckFillDuotone as ShieldCheckFillDuotoneIcon, ShieldCheckFillDuotone as SiShieldCheckFillDuotone };
export default ShieldCheckFillDuotone;
export type { ShieldCheckFillDuotoneProps };
