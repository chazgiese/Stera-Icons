import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-fill-duotone" {...props}>
      <path d="M22.5 8.73a11 11 0 0 1-2.05 10.3l-5.15-5.15a3.8 3.8 0 0 0 .47-2.36zM13 1.05a11 11 0 0 1 8.74 5.83L15 9.68a3.8 3.8 0 0 0-2-1.34z" opacity={0.4} />
        <path fill="currentColor" d="M11 8.33a3.8 3.8 0 1 0 2.88 6.97l5.16 5.15A11 11 0 1 1 11 1.05z" />
    </IconBase>
  ))
);

ChartDonutFillDuotone.displayName = 'ChartDonutFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutFillDuotone, ChartDonutFillDuotone as ChartDonutFillDuotoneIcon, ChartDonutFillDuotone as SiChartDonutFillDuotone };
export default ChartDonutFillDuotone;
export type { ChartDonutFillDuotoneProps };
