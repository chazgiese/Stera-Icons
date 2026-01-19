import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallFillProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallFill = memo(
  forwardRef<SVGSVGElement, ChartWaterfallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-fill" {...props}>
      <path fill="currentColor" d="M5 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2zM21 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zM13 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-1.99-1.8L9 14v-4c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

ChartWaterfallFill.displayName = 'ChartWaterfallFill';

// Triple export pattern (lucide-react style)
export { ChartWaterfallFill, ChartWaterfallFill as ChartWaterfallFillIcon, ChartWaterfallFill as SiChartWaterfallFill };
export default ChartWaterfallFill;
export type { ChartWaterfallFillProps };
