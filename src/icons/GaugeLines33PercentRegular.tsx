import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines33PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeLines33PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeLines33PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-33-percent" {...props}>
      <path fill="currentColor" d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.75.75 0 0 1-1.06 0l-.02-.03-2.1-2.1a.75.75 0 1 1 1.06-1.06l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58a9.2 9.2 0 0 0-5.24-2.16v2.22a.75.75 0 0 1-1.5 0V4.25a9.25 9.25 0 0 0-8.47 8.46H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1-.02.02A.75.75 0 0 1 4.34 21 10.75 10.75 0 0 1 12 2.71" />
        <path fill="currentColor" d="M6.52 7.98c.26-.26.68-.29.97-.07l.06.04.16.12 2.35 1.74a106 106 0 0 1 3.18 2.42 1.75 1.75 0 0 1-2.48 2.47l-.04-.04c-.32-.38-1.4-1.82-2.38-3.13L7.03 9.74l-.43-.57-.11-.16-.04-.05-.08-.12a.75.75 0 0 1 .15-.86" />
    </IconBase>
  ))
);

GaugeLines33PercentRegular.displayName = 'GaugeLines33PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeLines33PercentRegular, GaugeLines33PercentRegular as GaugeLines33PercentRegularIcon, GaugeLines33PercentRegular as SiGaugeLines33PercentRegular };
export default GaugeLines33PercentRegular;
export type { GaugeLines33PercentRegularProps };
