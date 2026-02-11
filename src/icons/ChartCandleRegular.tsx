import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleRegularProps = Omit<IconBaseProps, 'children'>;

const ChartCandleRegular = memo(
  forwardRef<SVGSVGElement, ChartCandleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle" {...props}>
      <path fillRule="evenodd" d="M7 1.25c.41 0 .75.34.75.75v2.25h.75c1.24 0 2.25 1 2.25 2.25v11c0 1.24-1 2.25-2.25 2.25h-.75V22a.75.75 0 0 1-1.5 0v-2.25H5.5c-1.24 0-2.25-1-2.25-2.25v-11c0-1.24 1-2.25 2.25-2.25h.75V2c0-.41.34-.75.75-.75m-1.5 4.5a.75.75 0 0 0-.75.75v11c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-11a.75.75 0 0 0-.75-.75zM17 3.25c.41 0 .75.34.75.75v2.25h.75c1.24 0 2.25 1 2.25 2.25v7c0 1.24-1 2.25-2.25 2.25h-.75V20a.75.75 0 0 1-1.5 0v-2.25h-.75c-1.24 0-2.25-1-2.25-2.25v-7c0-1.24 1-2.25 2.25-2.25h.75V4c0-.41.34-.75.75-.75m-1.5 4.5a.75.75 0 0 0-.75.75v7c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-7a.75.75 0 0 0-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleRegular.displayName = 'ChartCandleRegular';

// Triple export pattern (lucide-react style)
export { ChartCandleRegular, ChartCandleRegular as ChartCandleRegularIcon, ChartCandleRegular as SiChartCandleRegular };
export default ChartCandleRegular;
export type { ChartCandleRegularProps };
