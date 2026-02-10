import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowRegular = memo(
  forwardRef<SVGSVGElement, ChartBarRowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 2.25c.41 0 .75.34.75.75v.25h12a2 2 0 0 1 2 2v2.83a2 2 0 0 1-2 2h-5.07a2 2 0 0 1 .07.5v2.84a2 2 0 0 1-.07.5h1.57a2 2 0 0 1 2 2v2.83a2 2 0 0 1-2 2h-8.5V21a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75m.75 17h8.5a.5.5 0 0 0 .5-.5v-2.83a.5.5 0 0 0-.5-.5h-8.5zm0-5.33h5a.5.5 0 0 0 .5-.5v-2.84a.5.5 0 0 0-.5-.5h-5zm0-5.34h12a.5.5 0 0 0 .5-.5V5.25a.5.5 0 0 0-.5-.5h-12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowRegular.displayName = 'ChartBarRowRegular';

// Triple export pattern (lucide-react style)
export { ChartBarRowRegular, ChartBarRowRegular as ChartBarRowRegularIcon, ChartBarRowRegular as SiChartBarRowRegular };
export default ChartBarRowRegular;
export type { ChartBarRowRegularProps };
