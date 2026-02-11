import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-duotone" {...props}>
      <path d="M22.75 5v12.93c0 1-.82 1.82-1.82 1.82H2.02q.3 0 .52-.23l1.21-1.27h17.18c.18 0 .32-.14.32-.32V6.88l1.3-1.36q.2-.24.2-.53z" opacity={.4} />
        <path d="M21.46 4.48a.75.75 0 0 1 1.08 1.04l-9.04 9.5a.75.75 0 0 1-1.1 0l-2.78-2.93-7.08 7.43a.75.75 0 0 1-1.08-1.04l7.62-8 .05-.05a.75.75 0 0 1 1.03.05l2.8 2.93z" />
    </IconBase>
  ))
);

ChartAreaRegularDuotone.displayName = 'ChartAreaRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaRegularDuotone, ChartAreaRegularDuotone as ChartAreaRegularDuotoneIcon, ChartAreaRegularDuotone as SiChartAreaRegularDuotone };
export default ChartAreaRegularDuotone;
export type { ChartAreaRegularDuotoneProps };
