import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-duotone" {...props}>
      <path fill="currentColor" d="M15.92 9.25a.5.5 0 0 0-.5.5v8.5h-1.5v-5a.5.5 0 0 0-.5-.5h-2.84a.5.5 0 0 0-.5.5v5h-1.5v-12a.5.5 0 0 0-.5-.5H5.25a.5.5 0 0 0-.5.5v12h-1.5v-12c0-1.1.9-2 2-2h2.83a2 2 0 0 1 2 2v5.07a2 2 0 0 1 .5-.07h2.84a2 2 0 0 1 .5.07V9.75c0-1.1.9-2 2-2h2.83a2 2 0 0 1 2 2v8.5h-1.5v-8.5a.5.5 0 0 0-.5-.5z" opacity={.4} />
        <path fill="currentColor" d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChartBarRegularDuotone.displayName = 'ChartBarRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRegularDuotone, ChartBarRegularDuotone as ChartBarRegularDuotoneIcon, ChartBarRegularDuotone as SiChartBarRegularDuotone };
export default ChartBarRegularDuotone;
export type { ChartBarRegularDuotoneProps };
