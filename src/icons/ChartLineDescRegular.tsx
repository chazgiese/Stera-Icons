import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescRegular = memo(
  forwardRef<SVGSVGElement, ChartLineDescRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc" {...props}>
      <path fill="currentColor" d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM3.52 4.42a.75.75 0 0 1 1.06.1l4.96 5.96 4.82-2.16a.8.8 0 0 1 .78.1l.09.08 5.33 6a.75.75 0 1 1-1.12 1l-4.97-5.6-4.83 2.18a.75.75 0 0 1-.88-.2l-5.34-6.4a.75.75 0 0 1 .1-1.06" />
    </IconBase>
  ))
);

ChartLineDescRegular.displayName = 'ChartLineDescRegular';

// Triple export pattern (lucide-react style)
export { ChartLineDescRegular, ChartLineDescRegular as ChartLineDescRegularIcon, ChartLineDescRegular as SiChartLineDescRegular };
export default ChartLineDescRegular;
export type { ChartLineDescRegularProps };
