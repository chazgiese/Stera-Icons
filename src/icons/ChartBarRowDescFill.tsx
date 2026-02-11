import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-fill" {...props}>
      <path d="M5 2a1 1 0 0 1 1 1v.5h11.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v1h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v1h4.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H6v.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowDescFill.displayName = 'ChartBarRowDescFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescFill, ChartBarRowDescFill as ChartBarRowDescFillIcon, ChartBarRowDescFill as SiChartBarRowDescFill };
export default ChartBarRowDescFill;
export type { ChartBarRowDescFillProps };
