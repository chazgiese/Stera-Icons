import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines50PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-50-percent-duotone" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58A9.2 9.2 0 0 0 6 6.41L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" opacity={.4} />
        <path fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M12 14.46a1 1 0 0 0 1-1c-.07-.92-1-7-1-7s-.93 6.08-1 7a1 1 0 0 0 1 1Z" />
    </IconBase>
  ))
);

GaugeLines50PercentRegularDuotone.displayName = 'GaugeLines50PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines50PercentRegularDuotone, GaugeLines50PercentRegularDuotone as GaugeLines50PercentRegularDuotoneIcon, GaugeLines50PercentRegularDuotone as SiGaugeLines50PercentRegularDuotone };
export type { GaugeLines50PercentRegularDuotoneProps };
