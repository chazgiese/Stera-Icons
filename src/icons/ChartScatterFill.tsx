import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartScatterFillProps = Omit<IconBaseProps, 'children'>;

const ChartScatterFill = memo(
  forwardRef<SVGSVGElement, ChartScatterFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-scatter-fill" {...props}>
      <path fill="currentColor" d="M3 3.5c.83 0 1.5.67 1.5 1.5v10.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H21a1.5 1.5 0 0 1 0 3H6.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35q-.04-.62-.03-1.44V5c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M7 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ChartScatterFill.displayName = 'ChartScatterFill';

// Triple export pattern (lucide-react style)
export { ChartScatterFill, ChartScatterFill as ChartScatterFillIcon, ChartScatterFill as SiChartScatterFill };
export default ChartScatterFill;
export type { ChartScatterFillProps };
