import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-duotone" {...props}>
      <path fill="currentColor" d="M18.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-7.07a2 2 0 0 1 .07.5v3.5a2 2 0 0 1-.07.5h3.07a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10v-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10v-1.5h5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-5v-1.5h14a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-14v-1.5z" opacity={.4} />
        <path fill="currentColor" d="M4 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarRowRegularDuotone.displayName = 'ChartBarRowRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowRegularDuotone, ChartBarRowRegularDuotone as ChartBarRowRegularDuotoneIcon, ChartBarRowRegularDuotone as SiChartBarRowRegularDuotone };
export default ChartBarRowRegularDuotone;
export type { ChartBarRowRegularDuotoneProps };
