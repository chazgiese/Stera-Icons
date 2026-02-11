import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines50PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-50-percent-bold-duotone" {...props}>
      <path d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 0 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a8.96 8.96 0 0 0-11.23 0l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-.3.2l-.04.02a1 1 0 0 1-1.15-.3A11 11 0 0 1 12 2.46" opacity={.4} />
        <path d="M12 5.46a1 1 0 0 1 .99.85v.07l.04.2.43 2.9a105 105 0 0 1 .54 3.98 2 2 0 1 1-4-.07c.04-.5.3-2.3.54-3.92l.43-2.9.03-.19v-.05l.01-.01a1 1 0 0 1 .99-.86" />
    </IconBase>
  ))
);

GaugeLines50PercentBoldDuotone.displayName = 'GaugeLines50PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines50PercentBoldDuotone, GaugeLines50PercentBoldDuotone as GaugeLines50PercentBoldDuotoneIcon, GaugeLines50PercentBoldDuotone as SiGaugeLines50PercentBoldDuotone };
export default GaugeLines50PercentBoldDuotone;
export type { GaugeLines50PercentBoldDuotoneProps };
