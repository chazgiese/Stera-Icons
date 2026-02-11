import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYFill = memo(
  forwardRef<SVGSVGElement, ChartLineXYFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-fill" {...props}>
      <path d="M3 3.5c.83 0 1.5.67 1.5 1.5v10.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H21a1.5 1.5 0 0 1 0 3H6.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35q-.04-.62-.03-1.44V5c0-.83.67-1.5 1.5-1.5" />
        <path d="M18.8 5.1a1.5 1.5 0 1 1 2.4 1.8l-4.33 5.76a1.5 1.5 0 0 1-1.91.42l-2.97-1.59-3.85 4.49a1.5 1.5 0 0 1-2.28-1.96l4.65-5.4.08-.1a1.5 1.5 0 0 1 1.76-.24l2.9 1.55z" />
    </IconBase>
  ))
);

ChartLineXYFill.displayName = 'ChartLineXYFill';

// Triple export pattern (lucide-react style)
export { ChartLineXYFill, ChartLineXYFill as ChartLineXYFillIcon, ChartLineXYFill as SiChartLineXYFill };
export default ChartLineXYFill;
export type { ChartLineXYFillProps };
