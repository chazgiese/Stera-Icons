import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-duotone" {...props}>
      <path fill="currentColor" d="M18.25 8.08a.5.5 0 0 1-.5.5h-12v1.5h8.5c.28 0 .5.23.5.5v2.84a.5.5 0 0 1-.5.5h-8.5v1.5h5c.28 0 .5.22.5.5v2.83a.5.5 0 0 1-.5.5h-5v1.5h5a2 2 0 0 0 2-2v-2.83a2 2 0 0 0-.07-.5h1.57a2 2 0 0 0 2-2v-2.84a2 2 0 0 0-.07-.5h1.57a2 2 0 0 0 2-2V5.25a2 2 0 0 0-2-2h-12v1.5h12c.28 0 .5.22.5.5z" opacity={.4} />
        <path fill="currentColor" d="M5.75 3a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0z" />
    </IconBase>
  ))
);

ChartBarRowDescRegularDuotone.displayName = 'ChartBarRowDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescRegularDuotone, ChartBarRowDescRegularDuotone as ChartBarRowDescRegularDuotoneIcon, ChartBarRowDescRegularDuotone as SiChartBarRowDescRegularDuotone };
export default ChartBarRowDescRegularDuotone;
export type { ChartBarRowDescRegularDuotoneProps };
