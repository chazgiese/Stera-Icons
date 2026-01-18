import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldBold = memo(
  forwardRef<SVGSVGElement, ShieldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM5 5.69v4.9a11 11 0 0 0 6.08 9.83l.92.46.92-.46A11 11 0 0 0 19 10.58V5.7l-7-2.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBold.displayName = 'ShieldBold';

// Triple export pattern (lucide-react style)
export { ShieldBold, ShieldBold as ShieldBoldIcon, ShieldBold as SiShieldBold };
export type { ShieldBoldProps };
