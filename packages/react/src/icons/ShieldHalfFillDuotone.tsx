import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 23a1 1 0 0 1-.45-.1l-1.36-.69A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3A1 1 0 0 1 12 1z" />
        <path fill="currentColor" d="M12 1a1 1 0 0 1 .35.06l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68A1 1 0 0 1 12 23z" opacity={.4} />
    </IconBase>
  ))
);

ShieldHalfFillDuotone.displayName = 'ShieldHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldHalfFillDuotone, ShieldHalfFillDuotone as ShieldHalfFillDuotoneIcon, ShieldHalfFillDuotone as SiShieldHalfFillDuotone };
export type { ShieldHalfFillDuotoneProps };
