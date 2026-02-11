import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-bar-bold-duotone" {...props}>
      <path d="M5 17.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0v-.5a1 1 0 0 1 1-1M9 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M13 15a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17 13a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M21 9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M20.31 4.28a1 1 0 1 1 1.38 1.44l-8.1 7.74a1 1 0 0 1-1.36.02l-2.48-2.24-6.08 5.5a1 1 0 0 1-1.34-1.48l6.75-6.11a1 1 0 0 1 1.34 0l2.46 2.22z" />
    </IconBase>
  ))
);

ChartLineBarBoldDuotone.displayName = 'ChartLineBarBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineBarBoldDuotone, ChartLineBarBoldDuotone as ChartLineBarBoldDuotoneIcon, ChartLineBarBoldDuotone as SiChartLineBarBoldDuotone };
export default ChartLineBarBoldDuotone;
export type { ChartLineBarBoldDuotoneProps };
