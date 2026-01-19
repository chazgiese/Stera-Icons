import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallRegularProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallRegular = memo(
  forwardRef<SVGSVGElement, ChartWaterfallRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.75 11.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20.75 3.25a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-9.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v9.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0-.5-.5zM12.75 8.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallRegular.displayName = 'ChartWaterfallRegular';

// Triple export pattern (lucide-react style)
export { ChartWaterfallRegular, ChartWaterfallRegular as ChartWaterfallRegularIcon, ChartWaterfallRegular as SiChartWaterfallRegular };
export type { ChartWaterfallRegularProps };
