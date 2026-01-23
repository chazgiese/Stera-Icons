import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-duotone" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1.5 19 8-8 3.5 3.5L22.5 5" />
        <path fill="currentColor" d="m23.24 4.87.01.13v12.75a2 2 0 0 1-2 2H1.5l-.13-.01c.23.04.48-.03.66-.21l1.28-1.28h17.94a.5.5 0 0 0 .5-.5V6.81l1.28-1.28a.8.8 0 0 0 .2-.66" opacity={.4} />
    </IconBase>
  ))
);

ChartAreaRegularDuotone.displayName = 'ChartAreaRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaRegularDuotone, ChartAreaRegularDuotone as ChartAreaRegularDuotoneIcon, ChartAreaRegularDuotone as SiChartAreaRegularDuotone };
export default ChartAreaRegularDuotone;
export type { ChartAreaRegularDuotoneProps };
