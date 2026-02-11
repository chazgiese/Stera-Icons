import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-duotone" {...props}>
      <path d="M8.79 2.8a.75.75 0 0 1 .5 1.4 8.25 8.25 0 1 0 10.5 10.52.75.75 0 1 1 1.42.5A9.75 9.75 0 1 1 8.79 2.78" opacity={.4} />
        <path fillRule="evenodd" d="M13.08 2.31a9.75 9.75 0 0 1 8.6 8.6A1.67 1.67 0 0 1 20 12.76h-7c-.97 0-1.75-.78-1.75-1.75V4c0-.94.78-1.8 1.83-1.69m-.17 1.5q-.04-.01-.1.03a.2.2 0 0 0-.06.16v7q.02.23.25.25h7q.11 0 .16-.06a.1.1 0 0 0 .04-.1 8.25 8.25 0 0 0-7.28-7.29" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieRegularDuotone.displayName = 'ChartPieRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieRegularDuotone, ChartPieRegularDuotone as ChartPieRegularDuotoneIcon, ChartPieRegularDuotone as SiChartPieRegularDuotone };
export default ChartPieRegularDuotone;
export type { ChartPieRegularDuotoneProps };
