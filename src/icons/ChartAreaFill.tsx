import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaFillProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFill = memo(
  forwardRef<SVGSVGElement, ChartAreaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-fill" {...props}>
      <path d="M21.28 4.31A1 1 0 0 1 23 5v12.93c0 1.14-.93 2.07-2.07 2.07H2a1 1 0 0 1-.72-1.69l7.61-8 .08-.07a1 1 0 0 1 1.37.07l2.61 2.74z" />
    </IconBase>
  ))
);

ChartAreaFill.displayName = 'ChartAreaFill';

// Triple export pattern (lucide-react style)
export { ChartAreaFill, ChartAreaFill as ChartAreaFillIcon, ChartAreaFill as SiChartAreaFill };
export default ChartAreaFill;
export type { ChartAreaFillProps };
