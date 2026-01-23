import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineRegular = memo(
  forwardRef<SVGSVGElement, ChartLineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line" {...props}>
      <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM20.4 3.55a.75.75 0 0 1 1.2.9l-6 8a.75.75 0 0 1-.94.22L9.22 9.94l-5.62 7.03a.75.75 0 0 1-1.18-.94l6-7.5c.22-.27.6-.36.92-.2l5.45 2.72z" />
    </IconBase>
  ))
);

ChartLineRegular.displayName = 'ChartLineRegular';

// Triple export pattern (lucide-react style)
export { ChartLineRegular, ChartLineRegular as ChartLineRegularIcon, ChartLineRegular as SiChartLineRegular };
export default ChartLineRegular;
export type { ChartLineRegularProps };
