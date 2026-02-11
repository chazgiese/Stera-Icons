import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-bold-duotone" {...props}>
      <path d="M8 22a1 1 0 1 1-2 0v-2h2zM18 20a1 1 0 1 1-2 0v-2h2zM17 3a1 1 0 0 1 1 1v2h-2V4a1 1 0 0 1 1-1M7 1a1 1 0 0 1 1 1v2H6V2a1 1 0 0 1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M8.5 4A2.5 2.5 0 0 1 11 6.5v11A2.5 2.5 0 0 1 8.5 20h-3A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4zm-3 2a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM18.5 6A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 15.5 6zm-3 2a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleBoldDuotone.displayName = 'ChartCandleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleBoldDuotone, ChartCandleBoldDuotone as ChartCandleBoldDuotoneIcon, ChartCandleBoldDuotone as SiChartCandleBoldDuotone };
export default ChartCandleBoldDuotone;
export type { ChartCandleBoldDuotoneProps };
