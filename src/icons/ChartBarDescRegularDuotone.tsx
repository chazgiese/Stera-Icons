import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-duotone" {...props}>
      <path fill="currentColor" d="M8.08 5.75c.28 0 .5.22.5.5v12h1.5v-8.5c0-.28.23-.5.5-.5h2.84c.27 0 .5.22.5.5v8.5h1.5v-5c0-.28.22-.5.5-.5h2.83c.28 0 .5.22.5.5v5h1.5v-5a2 2 0 0 0-2-2h-2.83a2 2 0 0 0-.5.07V9.75a2 2 0 0 0-2-2h-2.84a2 2 0 0 0-.5.07V6.25a2 2 0 0 0-2-2H5.25a2 2 0 0 0-2 2v12h1.5v-12c0-.28.22-.5.5-.5z" opacity={.4} />
        <path fill="currentColor" d="M3 18.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" />
    </IconBase>
  ))
);

ChartBarDescRegularDuotone.displayName = 'ChartBarDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescRegularDuotone, ChartBarDescRegularDuotone as ChartBarDescRegularDuotoneIcon, ChartBarDescRegularDuotone as SiChartBarDescRegularDuotone };
export default ChartBarDescRegularDuotone;
export type { ChartBarDescRegularDuotoneProps };
