import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineXYFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 2.5c.83 0 1.5.67 1.5 1.5v12.8c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02H22a1.5 1.5 0 0 1 0 3H5.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35Q.5 17.62.5 16.8V4c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M18.79 5.12a1.5 1.5 0 0 1 2.42 1.76l-4.66 6.4a1.5 1.5 0 0 1-1.94.43l-3.25-1.8-3.37 4.05a1.5 1.5 0 0 1-2.3-1.92l4.16-5 .09-.1a1.5 1.5 0 0 1 1.79-.25l3.17 1.76z" />
    </IconBase>
  ))
);

ChartLineXYFillDuotone.displayName = 'ChartLineXYFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYFillDuotone, ChartLineXYFillDuotone as ChartLineXYFillDuotoneIcon, ChartLineXYFillDuotone as SiChartLineXYFillDuotone };
export type { ChartLineXYFillDuotoneProps };
