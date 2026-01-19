import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldHalfFillProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfFill = memo(
  forwardRef<SVGSVGElement, ShieldHalfFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-half-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM12 20.88l.92-.46A11 11 0 0 0 19 10.58V5.7l-7-2.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfFill.displayName = 'ShieldHalfFill';

// Triple export pattern (lucide-react style)
export { ShieldHalfFill, ShieldHalfFill as ShieldHalfFillIcon, ShieldHalfFill as SiShieldHalfFill };
export type { ShieldHalfFillProps };
