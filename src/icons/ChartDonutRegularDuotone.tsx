import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-duotone" {...props}>
      <path fill="currentColor" d="M11.92 2.25a.75.75 0 0 0-.67.75v.78a8.25 8.25 0 1 0 6.03 14.56l-2.78-2.78a4.35 4.35 0 1 1-3.25-7.84v.68c0 .41.34.75.75.75h-.17a2.85 2.85 0 1 0 2.06 4.99l.13-.12c-.28.27-.3.7-.06 1l.06.06 3.81 3.81c.28.28.71.3 1 .06l.06-.06a9.75 9.75 0 1 1-6.97-16.64" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 0 1 6.9 16.64c-.3.3-.77.3-1.07 0l-3.81-3.81-.06-.06a.75.75 0 0 1 .06-1A2.85 2.85 0 0 0 12 9.15a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75m4.24 8.8a4.4 4.4 0 0 1-.68 3.45l2.78 2.78a8.3 8.3 0 0 0 1.54-7.73zm-3.49-3.33a4.4 4.4 0 0 1 2.11 1l.09.08a4 4 0 0 1 .72.87l3.63-1.5A8.3 8.3 0 0 0 13 3.8l-.25-.02z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChartDonutRegularDuotone.displayName = 'ChartDonutRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutRegularDuotone, ChartDonutRegularDuotone as ChartDonutRegularDuotoneIcon, ChartDonutRegularDuotone as SiChartDonutRegularDuotone };
export default ChartDonutRegularDuotone;
export type { ChartDonutRegularDuotoneProps };
