import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-fill" {...props}>
      <path fill="currentColor" d="M4 23a1 1 0 0 0 1-1v-1h6.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v-1.5h10.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5V8h14.75C20.44 8 21 7.44 21 6.75v-2.5C21 3.56 20.44 3 19.75 3H5V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

ChartBarRowDescFill.displayName = 'ChartBarRowDescFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescFill, ChartBarRowDescFill as ChartBarRowDescFillIcon, ChartBarRowDescFill as SiChartBarRowDescFill };
export default ChartBarRowDescFill;
export type { ChartBarRowDescFillProps };
