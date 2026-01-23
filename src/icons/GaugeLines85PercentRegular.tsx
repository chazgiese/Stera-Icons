import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines85PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines85PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines85PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-85-percent" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 0-11.98l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58a9.2 9.2 0 0 0-5.24-2.16v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" />
        <path fill="currentColor" d="M12.06 11.72c.5.03 2.28.29 3.9.53l2.89.43.2.03.06.01.14.03a.75.75 0 0 1-.14 1.46h-.07l-.19.04-2.9.43a105 105 0 0 1-3.95.53 1.75 1.75 0 0 1 0-3.5z" />
    </IconBase>
  ))
);

GaugeLines85PercentRegular.displayName = 'GaugeLines85PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines85PercentRegular, GaugeLines85PercentRegular as GaugeLines85PercentRegularIcon, GaugeLines85PercentRegular as SiGaugeLines85PercentRegular };
export default GaugeLines85PercentRegular;
export type { GaugeLines85PercentRegularProps };
