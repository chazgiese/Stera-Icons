import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartPieAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-fill-duotone" {...props}>
      <path fill="currentColor" d="M21.62 9.1a.8.8 0 0 1 1.13.55 11 11 0 0 1-2.97 10.13 1 1 0 0 1-1.42 0l-6.12-6.13a.45.45 0 0 1 .14-.73zM12 1c3.89 0 7.3 2.02 9.26 5.06.27.43.07 1-.4 1.19l-9.24 3.83a.45.45 0 0 1-.62-.42V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M7.6 1.92a1 1 0 1 1 .8 1.83 9 9 0 0 0 6.89 16.63 1 1 0 1 1 .73 1.86Q14.14 23 12 23A11 11 0 0 1 7.6 1.92" opacity={.4} />
    </IconBase>
  ))
);

ChartPieAltFillDuotone.displayName = 'ChartPieAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieAltFillDuotone, ChartPieAltFillDuotone as ChartPieAltFillDuotoneIcon, ChartPieAltFillDuotone as SiChartPieAltFillDuotone };
export type { ChartPieAltFillDuotoneProps };
