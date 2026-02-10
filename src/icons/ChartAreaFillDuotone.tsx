import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-fill-duotone" {...props}>
      <path fill="currentColor" d="M23 5v12.93c0 1.14-.93 2.07-2.07 2.07H2.03a1 1 0 0 0 .7-.31l6.89-7.24 2.6 2.74a1 1 0 0 0 1.46 0l9.04-9.5a1 1 0 0 0 .28-.7z" opacity={.4} />
        <path fill="currentColor" d="M21.28 4.31a1 1 0 0 1 1.44 1.38l-9.04 9.5a1 1 0 0 1-1.45 0l-2.61-2.74-6.9 7.24a1 1 0 0 1-1.44-1.38l7.61-8 .08-.07a1 1 0 0 1 1.37.07l2.61 2.74z" />
    </IconBase>
  ))
);

ChartAreaFillDuotone.displayName = 'ChartAreaFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaFillDuotone, ChartAreaFillDuotone as ChartAreaFillDuotoneIcon, ChartAreaFillDuotone as SiChartAreaFillDuotone };
export default ChartAreaFillDuotone;
export type { ChartAreaFillDuotoneProps };
