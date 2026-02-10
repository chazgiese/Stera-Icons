import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-fill-duotone" {...props}>
      <path fill="currentColor" d="M3 3.5c.83 0 1.5.67 1.5 1.5v10.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H21a1.5 1.5 0 0 1 0 3H6.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35q-.04-.62-.03-1.44V5c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M6.1 4.8a1.5 1.5 0 0 1 2.1.3l3.56 4.73 2.89-1.55a1.5 1.5 0 0 1 1.76.25l.08.1 4.65 5.4a1.5 1.5 0 0 1-2.28 1.95l-3.85-4.49-2.97 1.6a1.5 1.5 0 0 1-1.9-.43L5.8 6.9a1.5 1.5 0 0 1 .3-2.1" />
    </IconBase>
  ))
);

ChartLineXYDescFillDuotone.displayName = 'ChartLineXYDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescFillDuotone, ChartLineXYDescFillDuotone as ChartLineXYDescFillDuotoneIcon, ChartLineXYDescFillDuotone as SiChartLineXYDescFillDuotone };
export default ChartLineXYDescFillDuotone;
export type { ChartLineXYDescFillDuotoneProps };
