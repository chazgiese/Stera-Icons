import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-fill-duotone" {...props}>
      <path d="M8 22a1 1 0 1 1-2 0v-2h2zM18 20a1 1 0 1 1-2 0v-2h2zM17 3a1 1 0 0 1 1 1v2h-2V4a1 1 0 0 1 1-1M7 1a1 1 0 0 1 1 1v2H6V2a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M9.2 4.01A2 2 0 0 1 11 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4zM19.2 6.01A2 2 0 0 1 21 8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4z" />
    </IconBase>
  ))
);

ChartCandleFillDuotone.displayName = 'ChartCandleFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleFillDuotone, ChartCandleFillDuotone as ChartCandleFillDuotoneIcon, ChartCandleFillDuotone as SiChartCandleFillDuotone };
export default ChartCandleFillDuotone;
export type { ChartCandleFillDuotoneProps };
