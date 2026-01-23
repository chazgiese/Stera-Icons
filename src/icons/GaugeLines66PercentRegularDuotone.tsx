import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines66PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines66PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines66PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-66-percent-duotone" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.25 9.25 0 0 0-8.47-8.46v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" opacity={.4} />
        <path fill="currentColor" d="M16.62 7.84a.75.75 0 0 1 .93 1.12l-.04.05-.11.16-.43.57-1.31 1.79a105 105 0 0 1-2.42 3.17 1.75 1.75 0 0 1-2.48-2.47l.04-.04c.38-.33 1.83-1.4 3.14-2.38l2.35-1.74.16-.12.05-.04z" />
    </IconBase>
  ))
);

GaugeLines66PercentRegularDuotone.displayName = 'GaugeLines66PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines66PercentRegularDuotone, GaugeLines66PercentRegularDuotone as GaugeLines66PercentRegularDuotoneIcon, GaugeLines66PercentRegularDuotone as SiGaugeLines66PercentRegularDuotone };
export default GaugeLines66PercentRegularDuotone;
export type { GaugeLines66PercentRegularDuotoneProps };
