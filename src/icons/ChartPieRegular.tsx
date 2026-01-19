import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartPieRegularProps = Omit<IconBaseProps, 'children'>;

const ChartPieRegular = memo(
  forwardRef<SVGSVGElement, ChartPieRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie" {...props}>
      <path fill="currentColor" d="M7.7 2.14a.75.75 0 0 1 .6 1.38A9.25 9.25 0 1 0 20.48 15.7a.75.75 0 0 1 1.38.6A10.75 10.75 0 1 1 7.7 2.14" />
        <path fill="currentColor" fillRule="evenodd" d="M13.07 1.3a10.75 10.75 0 0 1 9.63 9.63 1.7 1.7 0 0 1-1.7 1.82h-8c-.97 0-1.75-.78-1.75-1.75V3c0-.94.78-1.8 1.82-1.7m-.15 1.5q-.06-.01-.1.04a.2.2 0 0 0-.07.16v8q.02.23.25.25h8q.11 0 .16-.07a.1.1 0 0 0 .04-.1 9.25 9.25 0 0 0-8.28-8.28" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieRegular.displayName = 'ChartPieRegular';

// Triple export pattern (lucide-react style)
export { ChartPieRegular, ChartPieRegular as ChartPieRegularIcon, ChartPieRegular as SiChartPieRegular };
export default ChartPieRegular;
export type { ChartPieRegularProps };
