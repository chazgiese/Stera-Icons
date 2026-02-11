import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines50PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-50-percent" {...props}>
      <path d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58A9.2 9.2 0 0 0 6 6.41L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" />
        <path d="M12 5.71a.75.75 0 0 1 .74.65l.01.06.03.2.1.7.34 2.19a105 105 0 0 1 .53 3.95 1.75 1.75 0 0 1-3.5 0v-.05c.04-.5.3-2.28.53-3.9l.33-2.2.1-.7.04-.2v-.05l.04-.14c.1-.3.39-.5.71-.5" />
    </IconBase>
  ))
);

GaugeLines50PercentRegular.displayName = 'GaugeLines50PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines50PercentRegular, GaugeLines50PercentRegular as GaugeLines50PercentRegularIcon, GaugeLines50PercentRegular as SiGaugeLines50PercentRegular };
export default GaugeLines50PercentRegular;
export type { GaugeLines50PercentRegularProps };
