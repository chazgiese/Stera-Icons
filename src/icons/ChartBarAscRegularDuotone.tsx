import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-asc-duotone" {...props}>
      <path fill="currentColor" d="M15.92 5.75a.5.5 0 0 0-.5.5v12h-1.5v-8.5a.5.5 0 0 0-.5-.5h-2.84a.5.5 0 0 0-.5.5v8.5h-1.5v-5a.5.5 0 0 0-.5-.5H5.25a.5.5 0 0 0-.5.5v5h-1.5v-5c0-1.1.9-2 2-2h2.83a2 2 0 0 1 .5.07V9.75c0-1.1.9-2 2-2h2.84a2 2 0 0 1 .5.07V6.25c0-1.1.9-2 2-2h2.83a2 2 0 0 1 2 2v12h-1.5v-12a.5.5 0 0 0-.5-.5z" opacity={.4} />
        <path fill="currentColor" d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChartBarAscRegularDuotone.displayName = 'ChartBarAscRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarAscRegularDuotone, ChartBarAscRegularDuotone as ChartBarAscRegularDuotoneIcon, ChartBarAscRegularDuotone as SiChartBarAscRegularDuotone };
export default ChartBarAscRegularDuotone;
export type { ChartBarAscRegularDuotoneProps };
