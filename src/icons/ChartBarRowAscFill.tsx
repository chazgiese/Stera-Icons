import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-fill" {...props}>
      <path fill="currentColor" d="M5 2a1 1 0 0 1 1 1v.5h4.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v1h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v1h11.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowAscFill.displayName = 'ChartBarRowAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscFill, ChartBarRowAscFill as ChartBarRowAscFillIcon, ChartBarRowAscFill as SiChartBarRowAscFill };
export default ChartBarRowAscFill;
export type { ChartBarRowAscFillProps };
