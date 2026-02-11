import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieBoldProps = Omit<IconBaseProps, 'children'>;

const ChartPieBold = memo(
  forwardRef<SVGSVGElement, ChartPieBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-bold" {...props}>
      <path d="M8.7 2.56a1 1 0 0 1 .66 1.88 8 8 0 1 0 10.2 10.2 1 1 0 0 1 1.88.65A10 10 0 1 1 8.71 2.56" />
        <path fillRule="evenodd" d="m13.1 2.06.36.05a10 10 0 0 1 8.48 8.78A1.92 1.92 0 0 1 20 13h-7a2 2 0 0 1-2-2V4c0-1 .78-1.95 1.88-1.95zM13 11h6.94A8 8 0 0 0 13 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieBold.displayName = 'ChartPieBold';

// Triple export pattern (lucide-react style)
export { ChartPieBold, ChartPieBold as ChartPieBoldIcon, ChartPieBold as SiChartPieBold };
export default ChartPieBold;
export type { ChartPieBoldProps };
