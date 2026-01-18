import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallXRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.75 7.85a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM19.75 3.25a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-7.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v7.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.5-.5zM12.75 6.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallXRegularDuotone.displayName = 'ChartWaterfallXRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXRegularDuotone, ChartWaterfallXRegularDuotone as ChartWaterfallXRegularDuotoneIcon, ChartWaterfallXRegularDuotone as SiChartWaterfallXRegularDuotone };
export type { ChartWaterfallXRegularDuotoneProps };
