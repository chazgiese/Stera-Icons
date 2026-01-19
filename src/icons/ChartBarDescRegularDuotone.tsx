import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-duotone" {...props}>
      <path fill="currentColor" d="M16.25 12.75a.5.5 0 0 0-.5.5v6h-1.5v-10a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v10h-1.5v-14a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v14h-1.5v-14c0-1.1.9-2 2-2h3.5a2 2 0 0 1 2 2v2.07a2 2 0 0 1 .5-.07h3.5a2 2 0 0 1 2 2v2.07a2 2 0 0 1 .5-.07h3.5a2 2 0 0 1 2 2v6h-1.5v-6a.5.5 0 0 0-.5-.5z" opacity={.4} />
        <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChartBarDescRegularDuotone.displayName = 'ChartBarDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescRegularDuotone, ChartBarDescRegularDuotone as ChartBarDescRegularDuotoneIcon, ChartBarDescRegularDuotone as SiChartBarDescRegularDuotone };
export type { ChartBarDescRegularDuotoneProps };
