import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-alt-fill-duotone" {...props}>
      <path d="M5 20a1 1 0 1 1-2 0v-1.25h2zM21 19a1 1 0 1 1-2 0v-1.25h2zM13 18a1 1 0 1 1-2 0v-3.25h2zM4 5a1 1 0 0 1 1 1v3.25H3V6a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.25h-2V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.25h-2V4a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M5 9.25c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75H3c-.97 0-1.75-.78-1.75-1.75v-6c0-.97.78-1.75 1.75-1.75zM21 5.25c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V7c0-.97.78-1.75 1.75-1.75zM13 7.25c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V9c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ChartCandleAltFillDuotone.displayName = 'ChartCandleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleAltFillDuotone, ChartCandleAltFillDuotone as ChartCandleAltFillDuotoneIcon, ChartCandleAltFillDuotone as SiChartCandleAltFillDuotone };
export default ChartCandleAltFillDuotone;
export type { ChartCandleAltFillDuotoneProps };
