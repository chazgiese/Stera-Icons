import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartCandleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-duotone" {...props}>
      <path d="M7.75 22a.75.75 0 0 1-1.5 0v-2.25h1.5zM17.75 20a.75.75 0 0 1-1.5 0v-2.25h1.5zM17 3.25c.41 0 .75.34.75.75v2.25h-1.5V4c0-.41.34-.75.75-.75M7 1.25c.41 0 .75.34.75.75v2.25h-1.5V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.5 4.25c1.24 0 2.25 1 2.25 2.25v11c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-11c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v11c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-11a.75.75 0 0 0-.75-.75zM18.5 6.25c1.24 0 2.25 1 2.25 2.25v7c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-7c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v7c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-7a.75.75 0 0 0-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleRegularDuotone.displayName = 'ChartCandleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleRegularDuotone, ChartCandleRegularDuotone as ChartCandleRegularDuotoneIcon, ChartCandleRegularDuotone as SiChartCandleRegularDuotone };
export type { ChartCandleRegularDuotoneProps };
