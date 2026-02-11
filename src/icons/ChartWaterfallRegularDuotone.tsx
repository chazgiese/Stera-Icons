import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-duotone" {...props}>
      <path fillRule="evenodd" d="M12.75 8.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M4.75 11.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20.75 3.25a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-9.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v9.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallRegularDuotone.displayName = 'ChartWaterfallRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallRegularDuotone, ChartWaterfallRegularDuotone as ChartWaterfallRegularDuotoneIcon, ChartWaterfallRegularDuotone as SiChartWaterfallRegularDuotone };
export default ChartWaterfallRegularDuotone;
export type { ChartWaterfallRegularDuotoneProps };
