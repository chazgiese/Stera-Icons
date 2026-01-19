import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYFill = memo(
  forwardRef<SVGSVGElement, ChartBarXYFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-x-y-fill" {...props}>
      <path fill="currentColor" d="M2 2.5c.83 0 1.5.67 1.5 1.5v12.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H22a1.5 1.5 0 0 1 0 3H5.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35Q.5 17.62.5 16.8V4c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M7 11.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5M11 4.5c.83 0 1.5.67 1.5 1.5v10a1.5 1.5 0 0 1-3 0V6c0-.83.67-1.5 1.5-1.5M15 9.5c.83 0 1.5.67 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5c0-.83.67-1.5 1.5-1.5M19 6.5c.83 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-3 0V8c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ChartBarXYFill.displayName = 'ChartBarXYFill';

// Triple export pattern (lucide-react style)
export { ChartBarXYFill, ChartBarXYFill as ChartBarXYFillIcon, ChartBarXYFill as SiChartBarXYFill };
export default ChartBarXYFill;
export type { ChartBarXYFillProps };
