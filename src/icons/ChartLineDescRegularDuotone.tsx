import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-duotone" {...props}>
      <path d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M3.52 4.42a.75.75 0 0 1 1.06.1l4.96 5.96 4.82-2.16a.8.8 0 0 1 .78.1l.09.08 5.33 6a.75.75 0 0 1-1.12 1l-4.97-5.6-4.83 2.18a.75.75 0 0 1-.88-.2l-5.34-6.4a.75.75 0 0 1 .1-1.06" />
    </IconBase>
  ))
);

ChartLineDescRegularDuotone.displayName = 'ChartLineDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineDescRegularDuotone, ChartLineDescRegularDuotone as ChartLineDescRegularDuotoneIcon, ChartLineDescRegularDuotone as SiChartLineDescRegularDuotone };
export default ChartLineDescRegularDuotone;
export type { ChartLineDescRegularDuotoneProps };
