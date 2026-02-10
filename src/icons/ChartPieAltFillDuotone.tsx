import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-fill-duotone" {...props}>
      <path fill="currentColor" d="M8.11 2.79a1 1 0 0 1 .78 1.84 8 8 0 0 0 6.12 14.79 1 1 0 1 1 .75 1.85A10 10 0 0 1 8.11 2.79" opacity={.4} />
        <path fill="currentColor" d="M20.6 9.53a1 1 0 0 1 1.26.8 10 10 0 0 1-2.79 8.74 1 1 0 0 1-1.41 0l-4.84-4.83a1 1 0 0 1 .33-1.63l7.34-3.04zM12 2a10 10 0 0 1 8.16 4.21 1 1 0 0 1-.44 1.5l-7.34 3.05A1 1 0 0 1 11 9.83V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartPieAltFillDuotone.displayName = 'ChartPieAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieAltFillDuotone, ChartPieAltFillDuotone as ChartPieAltFillDuotoneIcon, ChartPieAltFillDuotone as SiChartPieAltFillDuotone };
export default ChartPieAltFillDuotone;
export type { ChartPieAltFillDuotoneProps };
