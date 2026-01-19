import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartAreaFillProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFill = memo(
  forwardRef<SVGSVGElement, ChartAreaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-fill" {...props}>
      <path fill="currentColor" d="M21.8 4.3a1 1 0 0 1 1.7.7v12.75c0 1.24-1 2.25-2.25 2.25H1.5a1 1 0 0 1-.7-1.7l8-8 .07-.07a1 1 0 0 1 1.34.06L13 13.1z" />
    </IconBase>
  ))
);

ChartAreaFill.displayName = 'ChartAreaFill';

// Triple export pattern (lucide-react style)
export { ChartAreaFill, ChartAreaFill as ChartAreaFillIcon, ChartAreaFill as SiChartAreaFill };
export default ChartAreaFill;
export type { ChartAreaFillProps };
