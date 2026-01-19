import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-duotone" {...props}>
      <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M20.4 3.55a.75.75 0 0 1 1.2.9l-6 8a.75.75 0 0 1-.94.22L9.21 9.94l-5.62 7.03a.75.75 0 0 1-1.18-.94l6-7.5c.22-.27.6-.36.92-.2l5.45 2.72z" />
    </IconBase>
  ))
);

ChartLineRegularDuotone.displayName = 'ChartLineRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineRegularDuotone, ChartLineRegularDuotone as ChartLineRegularDuotoneIcon, ChartLineRegularDuotone as SiChartLineRegularDuotone };
export default ChartLineRegularDuotone;
export type { ChartLineRegularDuotoneProps };
