import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-bar-fill-duotone" {...props}>
      <path d="M5 17.25c.83 0 1.5.67 1.5 1.5V19a1.5 1.5 0 0 1-3 0v-.25c0-.83.67-1.5 1.5-1.5M9 14c.83 0 1.5.67 1.5 1.5V19a1.5 1.5 0 0 1-3 0v-3.5c0-.83.67-1.5 1.5-1.5M13 14.75c.83 0 1.5.67 1.5 1.5V19a1.5 1.5 0 0 1-3 0v-2.75c0-.83.67-1.5 1.5-1.5M17 12.5c.83 0 1.5.67 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5c0-.83.67-1.5 1.5-1.5M21 8.5c.83 0 1.5.67 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M19.96 3.92a1.5 1.5 0 1 1 2.08 2.16l-8.1 7.75a1.5 1.5 0 0 1-2.05.02l-2.14-1.94L4 17.11a1.5 1.5 0 0 1-2.02-2.22l6.75-6.11.11-.1a1.5 1.5 0 0 1 1.9.1l2.12 1.91z" />
    </IconBase>
  ))
);

ChartLineBarFillDuotone.displayName = 'ChartLineBarFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineBarFillDuotone, ChartLineBarFillDuotone as ChartLineBarFillDuotoneIcon, ChartLineBarFillDuotone as SiChartLineBarFillDuotone };
export default ChartLineBarFillDuotone;
export type { ChartLineBarFillDuotoneProps };
