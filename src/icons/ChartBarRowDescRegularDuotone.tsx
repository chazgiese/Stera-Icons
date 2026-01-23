import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-duotone" {...props}>
      <path fill="currentColor" d="M18.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-2.07a2 2 0 0 1 .07.5v3.5a2 2 0 0 1-2 2h-2.07a2 2 0 0 1 .07.5v3.5a2 2 0 0 1-1.8 1.99l-.2.01h-6v-1.5h6a.5.5 0 0 0 .49-.4l.01-.1v-3.5a.5.5 0 0 0-.5-.5h-6v-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.4-.49l-.1-.01h-10v-1.5h14a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-14v-1.5z" opacity={.4} />
        <path fill="currentColor" d="M4 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarRowDescRegularDuotone.displayName = 'ChartBarRowDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescRegularDuotone, ChartBarRowDescRegularDuotone as ChartBarRowDescRegularDuotoneIcon, ChartBarRowDescRegularDuotone as SiChartBarRowDescRegularDuotone };
export default ChartBarRowDescRegularDuotone;
export type { ChartBarRowDescRegularDuotoneProps };
