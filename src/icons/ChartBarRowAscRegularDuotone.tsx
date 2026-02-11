import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-duotone" {...props}>
      <path d="M18.25 15.92a.5.5 0 0 0-.5-.5h-12v-1.5h8.5a.5.5 0 0 0 .5-.5v-2.84a.5.5 0 0 0-.5-.5h-8.5v-1.5h5a.5.5 0 0 0 .5-.5V5.25a.5.5 0 0 0-.5-.5h-5v-1.5h5a2 2 0 0 1 2 2v2.83a2 2 0 0 1-.07.5h1.57a2 2 0 0 1 2 2v2.84a2 2 0 0 1-.07.5h1.57a2 2 0 0 1 2 2v2.83a2 2 0 0 1-2 2h-12v-1.5h12a.5.5 0 0 0 .5-.5z" opacity={.4} />
        <path d="M5.75 21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 1.5 0z" />
    </IconBase>
  ))
);

ChartBarRowAscRegularDuotone.displayName = 'ChartBarRowAscRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscRegularDuotone, ChartBarRowAscRegularDuotone as ChartBarRowAscRegularDuotoneIcon, ChartBarRowAscRegularDuotone as SiChartBarRowAscRegularDuotone };
export default ChartBarRowAscRegularDuotone;
export type { ChartBarRowAscRegularDuotoneProps };
