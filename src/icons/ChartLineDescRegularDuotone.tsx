import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-duotone" {...props}>
      <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M2.55 3.4a.75.75 0 0 1 1.05.15l5.62 7.5 5.45-2.72c.31-.16.7-.07.92.2l6 7.5a.75.75 0 0 1-1.18.94L14.8 9.94l-5.45 2.73a.75.75 0 0 1-.94-.22l-6-8a.75.75 0 0 1 .15-1.05" />
    </IconBase>
  ))
);

ChartLineDescRegularDuotone.displayName = 'ChartLineDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineDescRegularDuotone, ChartLineDescRegularDuotone as ChartLineDescRegularDuotoneIcon, ChartLineDescRegularDuotone as SiChartLineDescRegularDuotone };
export type { ChartLineDescRegularDuotoneProps };
