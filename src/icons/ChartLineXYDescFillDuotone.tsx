import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-fill-duotone" {...props}>
      <path fill="currentColor" d="M2 2.5c.83 0 1.5.67 1.5 1.5v12.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H22a1.5 1.5 0 0 1 0 3H5.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35Q.5 17.62.5 16.8V4c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M5.45 6.4a1.5 1.5 0 0 1 2.11.09l4.04 4.4 2.1-1.9a1.5 1.5 0 0 1 2.12.1l4.85 5.4a1.5 1.5 0 0 1-2.23 2.01l-3.85-4.28-2.08 1.9a1.5 1.5 0 0 1-2.12-.1l-5.04-5.5a1.5 1.5 0 0 1 .1-2.13" />
    </IconBase>
  ))
);

ChartLineXYDescFillDuotone.displayName = 'ChartLineXYDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescFillDuotone, ChartLineXYDescFillDuotone as ChartLineXYDescFillDuotoneIcon, ChartLineXYDescFillDuotone as SiChartLineXYDescFillDuotone };
export default ChartLineXYDescFillDuotone;
export type { ChartLineXYDescFillDuotoneProps };
