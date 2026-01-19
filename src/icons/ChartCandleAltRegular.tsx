import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartCandleAltRegularProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltRegular = memo(
  forwardRef<SVGSVGElement, ChartCandleAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-alt" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 5.25c.41 0 .75.34.75.75v3.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2V20a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2V6c0-.41.34-.75.75-.75m-.75 5.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20 3.25c.41 0 .75.34.75.75v1.25a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2V19a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 1-2-2v-8.5c0-1.1.9-2 2-2V4c0-.41.34-.75.75-.75m-.75 3.5a.5.5 0 0 0-.5.5v8.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-8.5a.5.5 0 0 0-.5-.5zM12 5.25c.41 0 .75.34.75.75v1.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2V18a.75.75 0 0 1-1.5 0v-3.25a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2V6c0-.41.34-.75.75-.75m-.75 3.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleAltRegular.displayName = 'ChartCandleAltRegular';

// Triple export pattern (lucide-react style)
export { ChartCandleAltRegular, ChartCandleAltRegular as ChartCandleAltRegularIcon, ChartCandleAltRegular as SiChartCandleAltRegular };
export default ChartCandleAltRegular;
export type { ChartCandleAltRegularProps };
