import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-asc-fill" {...props}>
      <path fill="currentColor" d="M19.75 3c.69 0 1.25.56 1.25 1.25V19h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1v-6.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19h1.5V8.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19H16V4.25c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ChartBarAscFill.displayName = 'ChartBarAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarAscFill, ChartBarAscFill as ChartBarAscFillIcon, ChartBarAscFill as SiChartBarAscFill };
export default ChartBarAscFill;
export type { ChartBarAscFillProps };
