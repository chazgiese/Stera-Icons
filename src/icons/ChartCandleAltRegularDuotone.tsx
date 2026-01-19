import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartCandleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-alt-duotone" {...props}>
      <path d="M4.75 20a.75.75 0 0 1-1.5 0v-1.25h1.5zM20.75 19a.75.75 0 0 1-1.5 0v-1.25h1.5zM12.75 18a.75.75 0 0 1-1.5 0v-3.25h1.5zM4 5.25c.41 0 .75.34.75.75v3.25h-1.5V6c0-.41.34-.75.75-.75M12 5.25c.41 0 .75.34.75.75v1.25h-1.5V6c0-.41.34-.75.75-.75M20 3.25c.41 0 .75.34.75.75v1.25h-1.5V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.75 9.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20.75 5.25a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-8.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v8.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-8.5a.5.5 0 0 0-.5-.5zM12.75 7.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleAltRegularDuotone.displayName = 'ChartCandleAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleAltRegularDuotone, ChartCandleAltRegularDuotone as ChartCandleAltRegularDuotoneIcon, ChartCandleAltRegularDuotone as SiChartCandleAltRegularDuotone };
export default ChartCandleAltRegularDuotone;
export type { ChartCandleAltRegularDuotoneProps };
