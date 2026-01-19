import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartPieAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.07 1.3a10.76 10.76 0 0 1 7.25 17.5c-.66.81-1.82.76-2.49.1l-6.36-6.37a.8.8 0 0 1-.22-.53V3c0-.94.78-1.8 1.82-1.7m.25 10.96 5.57 5.57q.1.07.17.07.06 0 .1-.05a9.2 9.2 0 0 0 1.64-8.69zm-.4-9.46q-.06-.01-.1.04a.2.2 0 0 0-.07.16v7.88l7.48-3.1a9.3 9.3 0 0 0-7.3-4.98" clipRule="evenodd" />
        <path fill="currentColor" d="M7.7 2.14a.75.75 0 0 1 .6 1.38 9.25 9.25 0 0 0 7.08 17.1.75.75 0 0 1 .54 1.4q-1.83.72-3.92.73a10.75 10.75 0 0 1-4.3-20.6" opacity={.4} />
    </IconBase>
  ))
);

ChartPieAltRegularDuotone.displayName = 'ChartPieAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieAltRegularDuotone, ChartPieAltRegularDuotone as ChartPieAltRegularDuotoneIcon, ChartPieAltRegularDuotone as SiChartPieAltRegularDuotone };
export type { ChartPieAltRegularDuotoneProps };
