import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-asc-fill" {...props}>
      <path fill="currentColor" d="M19.25 5c.69 0 1.25.56 1.25 1.25V18h.5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h.5v-4.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V18h1V9.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V18h1V6.25c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ChartBarAscFill.displayName = 'ChartBarAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarAscFill, ChartBarAscFill as ChartBarAscFillIcon, ChartBarAscFill as SiChartBarAscFill };
export default ChartBarAscFill;
export type { ChartBarAscFillProps };
