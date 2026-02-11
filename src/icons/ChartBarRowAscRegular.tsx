import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscRegular = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc" {...props}>
      <path fillRule="evenodd" d="M5 2.25c.41 0 .75.34.75.75v.25h5a2 2 0 0 1 2 2v2.83a2 2 0 0 1-.07.5h1.57a2 2 0 0 1 2 2v2.84a2 2 0 0 1-.07.5h1.57a2 2 0 0 1 2 2v2.83a2 2 0 0 1-2 2h-12V21a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75m.75 17h12a.5.5 0 0 0 .5-.5v-2.83a.5.5 0 0 0-.5-.5h-12zm0-5.33h8.5a.5.5 0 0 0 .5-.5v-2.84a.5.5 0 0 0-.5-.5h-8.5zm0-5.34h5a.5.5 0 0 0 .5-.5V5.25a.5.5 0 0 0-.5-.5h-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowAscRegular.displayName = 'ChartBarRowAscRegular';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscRegular, ChartBarRowAscRegular as ChartBarRowAscRegularIcon, ChartBarRowAscRegular as SiChartBarRowAscRegular };
export default ChartBarRowAscRegular;
export type { ChartBarRowAscRegularProps };
