import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBanRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBanRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBanRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-duotone" {...props}>
      <path fill="currentColor" d="M17.9 15.92q-.36.68-.8 1.29L4.74 6.63V5.52l.7-.26z" opacity={.4} />
        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m4 5 8-3 8 3v5.58a12 12 0 0 1-6.63 10.74L12 22l-1.37-.68A12 12 0 0 1 4 10.58z" />
    </IconBase>
  ))
);

ShieldBanRegularDuotone.displayName = 'ShieldBanRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldBanRegularDuotone, ShieldBanRegularDuotone as ShieldBanRegularDuotoneIcon, ShieldBanRegularDuotone as SiShieldBanRegularDuotone };
export type { ShieldBanRegularDuotoneProps };
