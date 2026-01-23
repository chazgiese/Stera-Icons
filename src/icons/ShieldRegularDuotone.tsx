import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-duotone" {...props}>
      <path fill="currentColor" d="M11.74 1.3a.8.8 0 0 1 .52 0l8 3h.02a.75.75 0 0 0-1.03.7v.52L12 2.8 4.75 5.52V5a.75.75 0 0 0-1.01-.7z" opacity={.4} />
        <path fill="currentColor" d="M20 4.25c.41 0 .75.34.75.75v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7q-.34.15-.68 0l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V5a.75.75 0 0 1 1.5 0v5.58c0 4.26 2.4 8.16 6.22 10.07l1.03.51 1.03-.51c3.81-1.91 6.22-5.8 6.22-10.07V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ShieldRegularDuotone.displayName = 'ShieldRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldRegularDuotone, ShieldRegularDuotone as ShieldRegularDuotoneIcon, ShieldRegularDuotone as SiShieldRegularDuotone };
export default ShieldRegularDuotone;
export type { ShieldRegularDuotoneProps };
