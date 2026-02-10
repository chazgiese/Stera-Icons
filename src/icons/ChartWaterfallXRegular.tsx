import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXRegularProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXRegular = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-x" {...props}>
      <path fill="currentColor" d="M21 19.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M6.08 7.75a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-.83a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-.83 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h.83a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM18.75 3.25a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-.83a2 2 0 0 1-2-2v-7.5c0-1.1.9-2 2-2zm-.83 1.5a.5.5 0 0 0-.5.5v7.5c0 .28.22.5.5.5h.83a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.5-.5zM12.42 6.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-.84a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-.84 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h.84a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallXRegular.displayName = 'ChartWaterfallXRegular';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXRegular, ChartWaterfallXRegular as ChartWaterfallXRegularIcon, ChartWaterfallXRegular as SiChartWaterfallXRegular };
export default ChartWaterfallXRegular;
export type { ChartWaterfallXRegularProps };
