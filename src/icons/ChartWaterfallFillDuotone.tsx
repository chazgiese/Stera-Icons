import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-1.99-1.8L9 14v-4c0-1.1.9-2 2-2z" opacity={.4} />
        <path fill="currentColor" d="M5 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2zM21 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

ChartWaterfallFillDuotone.displayName = 'ChartWaterfallFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallFillDuotone, ChartWaterfallFillDuotone as ChartWaterfallFillDuotoneIcon, ChartWaterfallFillDuotone as SiChartWaterfallFillDuotone };
export default ChartWaterfallFillDuotone;
export type { ChartWaterfallFillDuotoneProps };
