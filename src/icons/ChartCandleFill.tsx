import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartCandleFillProps = Omit<IconBaseProps, 'children'>;

const ChartCandleFill = memo(
  forwardRef<SVGSVGElement, ChartCandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-fill" {...props}>
      <path fill="currentColor" d="M7 1a1 1 0 0 1 1 1v2h1l.2.01A2 2 0 0 1 11 6v12a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V2a1 1 0 0 1 1-1M17 3a1 1 0 0 1 1 1v2h1l.2.01A2 2 0 0 1 21 8v8a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h1V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartCandleFill.displayName = 'ChartCandleFill';

// Triple export pattern (lucide-react style)
export { ChartCandleFill, ChartCandleFill as ChartCandleFillIcon, ChartCandleFill as SiChartCandleFill };
export type { ChartCandleFillProps };
