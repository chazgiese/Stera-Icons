import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.07 1.3a10.75 10.75 0 0 1 9.63 9.63 1.7 1.7 0 0 1-1.7 1.82h-8c-.97 0-1.75-.78-1.75-1.75V3c0-.94.78-1.8 1.82-1.7m-.15 1.5q-.06-.01-.1.04a.2.2 0 0 0-.07.16v8q.02.23.25.25h8q.11 0 .16-.07a.1.1 0 0 0 .04-.1 9.25 9.25 0 0 0-8.28-8.28" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.7 2.14a.75.75 0 0 1 .6 1.38A9.25 9.25 0 1 0 20.48 15.7a.75.75 0 0 1 1.38.6A10.75 10.75 0 1 1 7.7 2.14" />
    </IconBase>
  ))
);

ChartPieRegularDuotone.displayName = 'ChartPieRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieRegularDuotone, ChartPieRegularDuotone as ChartPieRegularDuotoneIcon, ChartPieRegularDuotone as SiChartPieRegularDuotone };
export default ChartPieRegularDuotone;
export type { ChartPieRegularDuotoneProps };
