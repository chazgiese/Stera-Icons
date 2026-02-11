import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-x-fill-duotone" {...props}>
      <path d="M6.33 7.63c1.04 0 1.88.83 1.88 1.87v6c0 1.04-.84 1.88-1.88 1.88H5a1.9 1.9 0 0 1-1.87-1.88v-6c0-1.04.83-1.87 1.87-1.87zM19 3.13c1.04 0 1.88.83 1.88 1.87v8c0 1.04-.84 1.88-1.88 1.88h-1.33A1.9 1.9 0 0 1 15.79 13V5c0-1.04.84-1.87 1.88-1.87zM12.67 6.13c1.04 0 1.87.83 1.87 1.87v4c0 1.04-.83 1.88-1.87 1.88h-1.34A1.87 1.87 0 0 1 9.46 12V8c0-1.04.83-1.87 1.87-1.87z" opacity={0.4} />
        <path d="M21 19a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartWaterfallXFillDuotone.displayName = 'ChartWaterfallXFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXFillDuotone, ChartWaterfallXFillDuotone as ChartWaterfallXFillDuotoneIcon, ChartWaterfallXFillDuotone as SiChartWaterfallXFillDuotone };
export default ChartWaterfallXFillDuotone;
export type { ChartWaterfallXFillDuotoneProps };
