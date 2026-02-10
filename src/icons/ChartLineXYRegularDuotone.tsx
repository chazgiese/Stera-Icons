import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-duotone" {...props}>
      <path fill="currentColor" d="M3 4.25c.41 0 .75.34.75.75v10.8q0 .83.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H21a.75.75 0 0 1 0 1.5H6.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M19.4 5.55a.75.75 0 0 1 1.2.9l-4.33 5.76a.75.75 0 0 1-.96.21l-3.5-1.88-4.24 4.95a.75.75 0 0 1-1.14-.98l4.64-5.4.1-.09a.8.8 0 0 1 .83-.08l3.45 1.85z" />
    </IconBase>
  ))
);

ChartLineXYRegularDuotone.displayName = 'ChartLineXYRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYRegularDuotone, ChartLineXYRegularDuotone as ChartLineXYRegularDuotoneIcon, ChartLineXYRegularDuotone as SiChartLineXYRegularDuotone };
export default ChartLineXYRegularDuotone;
export type { ChartLineXYRegularDuotoneProps };
