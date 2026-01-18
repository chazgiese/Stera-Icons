import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M6 7.85c.97 0 1.75.79 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75H4c-.97 0-1.75-.78-1.75-1.75v-6c0-.96.78-1.75 1.75-1.75zM20 3.25c.97 0 1.75.78 1.75 1.75v8c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V5c0-.97.78-1.75 1.75-1.75zM13 6.25c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V8c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ChartWaterfallXFillDuotone.displayName = 'ChartWaterfallXFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXFillDuotone, ChartWaterfallXFillDuotone as ChartWaterfallXFillDuotoneIcon, ChartWaterfallXFillDuotone as SiChartWaterfallXFillDuotone };
export type { ChartWaterfallXFillDuotoneProps };
