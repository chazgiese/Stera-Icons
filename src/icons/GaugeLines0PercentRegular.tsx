import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines0PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines0PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines0PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-0-percent" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58a9.2 9.2 0 0 0-5.24-2.16v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.68 5.8.75.75 0 0 1-1.06 1.06A10.75 10.75 0 0 1 12 2.72" />
        <path fill="currentColor" d="M10.76 12.23a1.75 1.75 0 1 1 2.48 2.47l-.04.04c-.38.32-1.83 1.4-3.14 2.38l-1.78 1.32-.57.42-.16.12-.05.03-.12.08a.75.75 0 0 1-.93-1.12l.04-.06.11-.16.43-.57 1.31-1.78a105 105 0 0 1 2.42-3.17" />
    </IconBase>
  ))
);

GaugeLines0PercentRegular.displayName = 'GaugeLines0PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines0PercentRegular, GaugeLines0PercentRegular as GaugeLines0PercentRegularIcon, GaugeLines0PercentRegular as SiGaugeLines0PercentRegular };
export type { GaugeLines0PercentRegularProps };
