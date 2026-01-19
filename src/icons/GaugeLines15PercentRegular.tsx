import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines15PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines15PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines15PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-15-percent" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58a9.2 9.2 0 0 0-5.24-2.16v2.22a.75.75 0 0 1-1.5 0V4.25c-1.99.15-3.8.94-5.24 2.16L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0 0 11.98l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" />
        <path fill="currentColor" d="M12 11.71a1.75 1.75 0 1 1 0 3.5h-.06c-.5-.04-2.28-.3-3.9-.53l-2.89-.43-.2-.03-.06-.01-.14-.04a.75.75 0 0 1 .14-1.45h.07l.19-.04a524 524 0 0 1 6.8-.96z" />
    </IconBase>
  ))
);

GaugeLines15PercentRegular.displayName = 'GaugeLines15PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines15PercentRegular, GaugeLines15PercentRegular as GaugeLines15PercentRegularIcon, GaugeLines15PercentRegular as SiGaugeLines15PercentRegular };
export type { GaugeLines15PercentRegularProps };
