import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-fill-duotone" {...props}>
      <path d="M21.58 9.12a10 10 0 0 1-1.84 9.2l-4.8-4.79a3.3 3.3 0 0 0 .37-1.82zM13 2.05a10 10 0 0 1 7.81 5.22l-6.27 2.6q-.61-.73-1.54-1.04z" opacity={0.4} />
        <path d="M11 8.83a3.32 3.32 0 1 0 2.53 6.12l4.8 4.8A10 10 0 1 1 11 2.04z" />
    </IconBase>
  ))
);

ChartDonutFillDuotone.displayName = 'ChartDonutFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutFillDuotone, ChartDonutFillDuotone as ChartDonutFillDuotoneIcon, ChartDonutFillDuotone as SiChartDonutFillDuotone };
export default ChartDonutFillDuotone;
export type { ChartDonutFillDuotoneProps };
