import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-duotone" {...props}>
      <path fill="currentColor" d="M11.74 1.92a.8.8 0 0 1 .52 0l7.5 2.82h.02a.75.75 0 0 0-1.03.7v.52L12 3.43 5.25 5.96v-.52a.75.75 0 0 0-1.01-.7z" opacity={.4} />
        <path fill="currentColor" d="M19.5 4.69c.41 0 .75.33.75.75v5.23a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V5.44a.75.75 0 0 1 1.5 0v5.23a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a10.5 10.5 0 0 0 5.8-9.39V5.44c0-.42.34-.75.75-.75" />
    </IconBase>
  ))
);

ShieldRegularDuotone.displayName = 'ShieldRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldRegularDuotone, ShieldRegularDuotone as ShieldRegularDuotoneIcon, ShieldRegularDuotone as SiShieldRegularDuotone };
export default ShieldRegularDuotone;
export type { ShieldRegularDuotoneProps };
