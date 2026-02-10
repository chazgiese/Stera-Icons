import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescFill = memo(
  forwardRef<SVGSVGElement, ChartLineDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-fill" {...props}>
      <path fill="currentColor" d="M21 17.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM3.04 3.85a1.5 1.5 0 0 1 2.11.19l4.6 5.52 4.3-1.93a1.5 1.5 0 0 1 1.65.29l.09.08 5.33 6a1.5 1.5 0 0 1-2.24 2l-4.6-5.18-4.33 1.95a1.5 1.5 0 0 1-1.77-.4L2.85 5.95a1.5 1.5 0 0 1 .19-2.11" />
    </IconBase>
  ))
);

ChartLineDescFill.displayName = 'ChartLineDescFill';

// Triple export pattern (lucide-react style)
export { ChartLineDescFill, ChartLineDescFill as ChartLineDescFillIcon, ChartLineDescFill as SiChartLineDescFill };
export default ChartLineDescFill;
export type { ChartLineDescFillProps };
