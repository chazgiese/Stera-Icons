import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckFillProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFill = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-check-fill" {...props}>
      <path fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.44a1 1 0 0 1 .65-.94l7.5-2.81zm4 7.66a1 1 0 0 0-1.41-.05l-3.47 3.26-1.07-1.34a1 1 0 0 0-1.56 1.25l1.2 1.5q.13.18.28.34c.1.11.27.26.5.37q.48.2.98.06c.25-.06.43-.19.55-.28l.33-.3 3.62-3.4a1 1 0 0 0 .05-1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckFill.displayName = 'ShieldCheckFill';

// Triple export pattern (lucide-react style)
export { ShieldCheckFill, ShieldCheckFill as ShieldCheckFillIcon, ShieldCheckFill as SiShieldCheckFill };
export default ShieldCheckFill;
export type { ShieldCheckFillProps };
