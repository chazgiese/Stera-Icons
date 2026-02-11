import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfBold = memo(
  forwardRef<SVGSVGElement, ShieldHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-half-bold" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zM5.5 6.13v4.54c0 3.82 2.12 7.32 5.5 9.08V4.07zM13 19.75a10.3 10.3 0 0 0 5.5-9.08V6.13L13 4.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfBold.displayName = 'ShieldHalfBold';

// Triple export pattern (lucide-react style)
export { ShieldHalfBold, ShieldHalfBold as ShieldHalfBoldIcon, ShieldHalfBold as SiShieldHalfBold };
export default ShieldHalfBold;
export type { ShieldHalfBoldProps };
