import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartScatterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartScatterRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartScatterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-scatter-duotone" {...props}>
      <path fill="currentColor" d="M2 3.25c.41 0 .75.34.75.75v12.8q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21a.75.75 0 0 1 0 1.5H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M6.5 14.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M11.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.5 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ChartScatterRegularDuotone.displayName = 'ChartScatterRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartScatterRegularDuotone, ChartScatterRegularDuotone as ChartScatterRegularDuotoneIcon, ChartScatterRegularDuotone as SiChartScatterRegularDuotone };
export type { ChartScatterRegularDuotoneProps };
