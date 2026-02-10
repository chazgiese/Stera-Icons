import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineRegular = memo(
  forwardRef<SVGSVGElement, ChartLineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line" {...props}>
      <path fill="currentColor" d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM19.42 4.52a.75.75 0 0 1 1.16.96l-5.34 6.4a.75.75 0 0 1-.88.2L9.53 9.91 4.56 15.5a.75.75 0 0 1-1.12-1l5.33-6 .09-.08a.8.8 0 0 1 .78-.1l4.82 2.16z" />
    </IconBase>
  ))
);

ChartLineRegular.displayName = 'ChartLineRegular';

// Triple export pattern (lucide-react style)
export { ChartLineRegular, ChartLineRegular as ChartLineRegularIcon, ChartLineRegular as SiChartLineRegular };
export default ChartLineRegular;
export type { ChartLineRegularProps };
