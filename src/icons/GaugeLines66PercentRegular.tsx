import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines66PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines66PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines66PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-66-percent" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.25 9.25 0 0 0-8.47-8.46v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" />
        <path fill="currentColor" d="M16.62 7.84a.75.75 0 0 1 .93 1.12l-.04.05-.11.16-1.74 2.36a105 105 0 0 1-2.42 3.17 1.75 1.75 0 0 1-2.48-2.47l.04-.04c.38-.33 1.83-1.4 3.14-2.38l1.78-1.32.57-.42.16-.12.05-.04z" />
    </IconBase>
  ))
);

GaugeLines66PercentRegular.displayName = 'GaugeLines66PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines66PercentRegular, GaugeLines66PercentRegular as GaugeLines66PercentRegularIcon, GaugeLines66PercentRegular as SiGaugeLines66PercentRegular };
export default GaugeLines66PercentRegular;
export type { GaugeLines66PercentRegularProps };
