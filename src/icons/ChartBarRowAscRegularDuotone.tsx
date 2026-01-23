import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-duotone" {...props}>
      <path fill="currentColor" d="M10.75 2.25a2 2 0 0 1 2 2v3.5l-.01.2-.06.3h2.07a2 2 0 0 1 2 2v3.5l-.01.2-.06.3h2.07l.2.01a2 2 0 0 1 1.8 1.99v3.5l-.01.2a2 2 0 0 1-1.99 1.8h-14v-1.5h14l.1-.01a.5.5 0 0 0 .4-.49v-3.5a.5.5 0 0 0-.5-.5h-14v-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10v-1.5h6a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-6v-1.5z" opacity={.4} />
        <path fill="currentColor" d="M4 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarRowAscRegularDuotone.displayName = 'ChartBarRowAscRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscRegularDuotone, ChartBarRowAscRegularDuotone as ChartBarRowAscRegularDuotoneIcon, ChartBarRowAscRegularDuotone as SiChartBarRowAscRegularDuotone };
export default ChartBarRowAscRegularDuotone;
export type { ChartBarRowAscRegularDuotoneProps };
