import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarFill = memo(
  forwardRef<SVGSVGElement, ChartBarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-fill" {...props}>
      <path fill="currentColor" d="M7.25 5c.69 0 1.25.56 1.25 1.25V18h1v-4.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V18h1V9.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V18h.5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h.5V6.25C3.5 5.56 4.06 5 4.75 5z" />
    </IconBase>
  ))
);

ChartBarFill.displayName = 'ChartBarFill';

// Triple export pattern (lucide-react style)
export { ChartBarFill, ChartBarFill as ChartBarFillIcon, ChartBarFill as SiChartBarFill };
export default ChartBarFill;
export type { ChartBarFillProps };
