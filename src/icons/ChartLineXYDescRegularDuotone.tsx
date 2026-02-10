import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-duotone" {...props}>
      <path fill="currentColor" d="M3 4.25c.41 0 .75.34.75.75v10.8q0 .83.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21a.75.75 0 0 1 0 1.5H6.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M6.55 5.4a.75.75 0 0 1 1.05.15l3.95 5.24L15 8.94c.27-.15.6-.11.83.08l.1.1 4.64 5.39a.75.75 0 0 1-1.14.98l-4.25-4.95-3.5 1.88a.75.75 0 0 1-.95-.2L6.4 6.44a.75.75 0 0 1 .15-1.05" />
    </IconBase>
  ))
);

ChartLineXYDescRegularDuotone.displayName = 'ChartLineXYDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescRegularDuotone, ChartLineXYDescRegularDuotone as ChartLineXYDescRegularDuotoneIcon, ChartLineXYDescRegularDuotone as SiChartLineXYDescRegularDuotone };
export default ChartLineXYDescRegularDuotone;
export type { ChartLineXYDescRegularDuotoneProps };
