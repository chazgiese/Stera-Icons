import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBanFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-fill-duotone" {...props}>
      <path fill="currentColor" d="M18.85 17.73 3.25 4.35a1 1 0 0 1 .4-.29l8-3 .08-.02a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58c0 2.6-.77 5.07-2.15 7.15" opacity={.4} />
        <path fill="currentColor" d="M18.86 17.73a13 13 0 0 1-5.05 4.48l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .24-.65z" />
    </IconBase>
  ))
);

ShieldBanFillDuotone.displayName = 'ShieldBanFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBanFillDuotone, ShieldBanFillDuotone as ShieldBanFillDuotoneIcon, ShieldBanFillDuotone as SiShieldBanFillDuotone };
export type { ShieldBanFillDuotoneProps };
