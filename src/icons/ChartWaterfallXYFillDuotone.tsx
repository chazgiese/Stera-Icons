import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXYFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-x-y-fill-duotone" {...props}>
      <path fill="currentColor" d="M2 2.5c.83 0 1.5.67 1.5 1.5v12.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H22a1.5 1.5 0 0 1 0 3H5.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35Q.5 17.62.5 16.8V4c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M7 10.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5M11 6.5c.83 0 1.5.67 1.5 1.5v5a1.5 1.5 0 0 1-3 0V8c0-.83.67-1.5 1.5-1.5M19 1.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0V3c0-.83.67-1.5 1.5-1.5M15 3.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0V5c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ChartWaterfallXYFillDuotone.displayName = 'ChartWaterfallXYFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXYFillDuotone, ChartWaterfallXYFillDuotone as ChartWaterfallXYFillDuotoneIcon, ChartWaterfallXYFillDuotone as SiChartWaterfallXYFillDuotone };
export default ChartWaterfallXYFillDuotone;
export type { ChartWaterfallXYFillDuotoneProps };
