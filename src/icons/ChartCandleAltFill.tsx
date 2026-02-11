import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltFillProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltFill = memo(
  forwardRef<SVGSVGElement, ChartCandleAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-alt-fill" {...props}>
      <path d="M4 5a1 1 0 0 1 1 1v3.25c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75V20a1 1 0 1 1-2 0v-1.25c-.97 0-1.75-.78-1.75-1.75v-6c0-.97.78-1.75 1.75-1.75V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.25c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75V19a1 1 0 1 1-2 0v-1.25c-.97 0-1.75-.78-1.75-1.75V7c0-.97.78-1.75 1.75-1.75V4a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.25c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75V18a1 1 0 1 1-2 0v-3.25c-.97 0-1.75-.78-1.75-1.75V9c0-.97.78-1.75 1.75-1.75V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartCandleAltFill.displayName = 'ChartCandleAltFill';

// Triple export pattern (lucide-react style)
export { ChartCandleAltFill, ChartCandleAltFill as ChartCandleAltFillIcon, ChartCandleAltFill as SiChartCandleAltFill };
export default ChartCandleAltFill;
export type { ChartCandleAltFillProps };
