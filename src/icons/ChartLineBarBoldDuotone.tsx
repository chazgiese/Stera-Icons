import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-bar-bold-duotone" {...props}>
      <path d="M5 17.5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-2 0v-1.6a1 1 0 0 1 1-1M9 13.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-5.5a1 1 0 0 1 1-1M13 15.25a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-3.75a1 1 0 0 1 1-1M17 12.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-6.5a1 1 0 0 1 1-1M21 8.25a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0V9.25a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M21.27 3.31a1 1 0 0 1 1.46 1.38l-9 9.5a1 1 0 0 1-1.44.02l-2.8-2.8-6.78 6.8a1 1 0 0 1-1.42-1.42l7.5-7.5.08-.06a1 1 0 0 1 1.34.06l2.77 2.78z" />
    </IconBase>
  ))
);

ChartLineBarBoldDuotone.displayName = 'ChartLineBarBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineBarBoldDuotone, ChartLineBarBoldDuotone as ChartLineBarBoldDuotoneIcon, ChartLineBarBoldDuotone as SiChartLineBarBoldDuotone };
export default ChartLineBarBoldDuotone;
export type { ChartLineBarBoldDuotoneProps };
