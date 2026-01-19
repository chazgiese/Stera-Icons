import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineXYRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-duotone" {...props}>
      <path fill="currentColor" d="M2 3.25c.41 0 .75.34.75.75v12.8q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H22a.75.75 0 0 1 0 1.5H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M19.4 5.56a.75.75 0 0 1 1.2.88l-4.66 6.4c-.22.3-.64.4-.97.22l-3.8-2.1-4.6 5.52a.75.75 0 0 1-1.15-.96l5-6a.75.75 0 0 1 .94-.18l3.76 2.08z" />
    </IconBase>
  ))
);

ChartLineXYRegularDuotone.displayName = 'ChartLineXYRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYRegularDuotone, ChartLineXYRegularDuotone as ChartLineXYRegularDuotoneIcon, ChartLineXYRegularDuotone as SiChartLineXYRegularDuotone };
export type { ChartLineXYRegularDuotoneProps };
