import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-bold-duotone" {...props}>
      <path d="M8.7 2.56a1 1 0 0 1 .66 1.88 8 8 0 1 0 10.2 10.2 1 1 0 0 1 1.88.65A10 10 0 1 1 8.71 2.56" opacity={.4} />
        <path fillRule="evenodd" d="m13.1 2.06.36.05a10 10 0 0 1 8.48 8.78A1.92 1.92 0 0 1 20 13h-7a2 2 0 0 1-2-2V4c0-1 .78-1.95 1.88-1.95zM13 11h6.94A8 8 0 0 0 13 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieBoldDuotone.displayName = 'ChartPieBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieBoldDuotone, ChartPieBoldDuotone as ChartPieBoldDuotoneIcon, ChartPieBoldDuotone as SiChartPieBoldDuotone };
export default ChartPieBoldDuotone;
export type { ChartPieBoldDuotoneProps };
