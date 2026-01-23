import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-fill" {...props}>
      <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v1h15.75c.69 0 1.25.56 1.25 1.25v2.5C22 7.44 21.44 8 20.75 8H5v1.5h7.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5V16h11.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowFill.displayName = 'ChartBarRowFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowFill, ChartBarRowFill as ChartBarRowFillIcon, ChartBarRowFill as SiChartBarRowFill };
export default ChartBarRowFill;
export type { ChartBarRowFillProps };
