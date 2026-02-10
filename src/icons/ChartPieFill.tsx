import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieFillProps = Omit<IconBaseProps, 'children'>;

const ChartPieFill = memo(
  forwardRef<SVGSVGElement, ChartPieFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-fill" {...props}>
      <path fill="currentColor" d="M8.7 2.56a1 1 0 0 1 .66 1.88 8 8 0 1 0 10.2 10.2 1 1 0 0 1 1.88.65A10 10 0 1 1 8.71 2.56" />
        <path fill="currentColor" d="m13.1 2.06.36.05a10 10 0 0 1 8.48 8.78A1.92 1.92 0 0 1 20 13h-7a2 2 0 0 1-2-2V4c0-1 .78-1.95 1.88-1.95z" />
    </IconBase>
  ))
);

ChartPieFill.displayName = 'ChartPieFill';

// Triple export pattern (lucide-react style)
export { ChartPieFill, ChartPieFill as ChartPieFillIcon, ChartPieFill as SiChartPieFill };
export default ChartPieFill;
export type { ChartPieFillProps };
