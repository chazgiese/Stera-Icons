import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines100PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines100PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines100PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.75.75 0 0 1-1.06-1.07 9.2 9.2 0 0 0 2.68-5.79H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58a9.2 9.2 0 0 0-5.24-2.16v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1-.02.02A.75.75 0 0 1 4.34 21 10.75 10.75 0 0 1 12 2.71" />
        <path fill="currentColor" d="M10.76 12.23c.69-.69 1.8-.69 2.48 0l.04.04c.32.38 1.4 1.82 2.38 3.13l1.31 1.78.43.57.11.16.04.05.07.13a.75.75 0 0 1-1.11.93l-.06-.04-.16-.12-.57-.42-1.78-1.32a105 105 0 0 1-3.18-2.42 1.75 1.75 0 0 1 0-2.47" />
    </IconBase>
  ))
);

GaugeLines100PercentRegular.displayName = 'GaugeLines100PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines100PercentRegular, GaugeLines100PercentRegular as GaugeLines100PercentRegularIcon, GaugeLines100PercentRegular as SiGaugeLines100PercentRegular };
export type { GaugeLines100PercentRegularProps };
