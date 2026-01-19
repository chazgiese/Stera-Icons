import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartDonutRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-duotone" {...props}>
      <path fill="currentColor" d="M12.4 1.26a10.75 10.75 0 0 1 7.2 18.34c.3-.3.3-.77 0-1.06l-.55-.55a9.3 9.3 0 0 0 1.75-8.82l-4.18 1.73a4.8 4.8 0 0 1-.77 3.89l-.5-.5a.75.75 0 0 0-1.05 0A3.25 3.25 0 0 0 12 8.76c.41 0 .75-.34.75-.75v-.69a5 5 0 0 1 2.14.92l.08.06.16.14.09.08.12.12.2.2.07.08.13.16.04.06q.14.18.26.38l4.19-1.73a9.3 9.3 0 0 0-7.19-4.97l-.29-.03V2a.75.75 0 0 0-.75-.75z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75a3.25 3.25 0 1 0 2.3 5.55.75.75 0 0 1 1.06 0l4.24 4.24c.3.3.3.77 0 1.06A10.75 10.75 0 1 1 12 1.25m-.75 1.53a9.25 9.25 0 1 0 6.74 16.27l-3.2-3.2a4.75 4.75 0 1 1-3.54-8.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartDonutRegularDuotone.displayName = 'ChartDonutRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutRegularDuotone, ChartDonutRegularDuotone as ChartDonutRegularDuotoneIcon, ChartDonutRegularDuotone as SiChartDonutRegularDuotone };
export default ChartDonutRegularDuotone;
export type { ChartDonutRegularDuotoneProps };
