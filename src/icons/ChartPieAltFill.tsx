import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltFillProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltFill = memo(
  forwardRef<SVGSVGElement, ChartPieAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-fill" {...props}>
      <path fill="currentColor" d="M8.11 2.79a1 1 0 0 1 .78 1.84 8 8 0 0 0 6.12 14.79 1 1 0 1 1 .75 1.85A10 10 0 0 1 8.11 2.79" />
        <path fill="currentColor" d="M20.6 9.53a1 1 0 0 1 1.26.8 10 10 0 0 1-2.79 8.74 1 1 0 0 1-1.41 0l-4.84-4.83a1 1 0 0 1 .33-1.63l7.34-3.04zM12 2a10 10 0 0 1 8.16 4.21 1 1 0 0 1-.44 1.5l-7.34 3.05A1 1 0 0 1 11 9.83V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartPieAltFill.displayName = 'ChartPieAltFill';

// Triple export pattern (lucide-react style)
export { ChartPieAltFill, ChartPieAltFill as ChartPieAltFillIcon, ChartPieAltFill as SiChartPieAltFill };
export default ChartPieAltFill;
export type { ChartPieAltFillProps };
