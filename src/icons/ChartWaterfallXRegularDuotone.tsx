import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-x-duotone" {...props}>
      <path d="M6.08 7.75a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-.83a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-.83 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h.83a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM18.75 3.25a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-.83a2 2 0 0 1-2-2v-7.5c0-1.1.9-2 2-2zm-.83 1.5a.5.5 0 0 0-.5.5v7.5c0 .28.22.5.5.5h.83a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.5-.5zM12.42 6.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-.84a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-.84 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h.84a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" opacity={0.4} />
        <path fill="currentColor" d="M21 19.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChartWaterfallXRegularDuotone.displayName = 'ChartWaterfallXRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXRegularDuotone, ChartWaterfallXRegularDuotone as ChartWaterfallXRegularDuotoneIcon, ChartWaterfallXRegularDuotone as SiChartWaterfallXRegularDuotone };
export default ChartWaterfallXRegularDuotone;
export type { ChartWaterfallXRegularDuotoneProps };
