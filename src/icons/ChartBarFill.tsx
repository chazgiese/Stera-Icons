import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarFill = memo(
  forwardRef<SVGSVGElement, ChartBarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-fill" {...props}>
      <path fill="currentColor" d="M6.75 3C7.44 3 8 3.56 8 4.25V19h1.5v-6.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19H16V8.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1V4.25C3 3.56 3.56 3 4.25 3z" />
    </IconBase>
  ))
);

ChartBarFill.displayName = 'ChartBarFill';

// Triple export pattern (lucide-react style)
export { ChartBarFill, ChartBarFill as ChartBarFillIcon, ChartBarFill as SiChartBarFill };
export default ChartBarFill;
export type { ChartBarFillProps };
