import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-fill-duotone" {...props}>
      <path d="M21 17.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M18.85 4.04a1.5 1.5 0 0 1 2.3 1.92l-5.33 6.4a1.5 1.5 0 0 1-1.77.4l-4.33-1.94L5.12 16a1.5 1.5 0 0 1-2.24-2L8.2 8l.09-.08a1.5 1.5 0 0 1 1.65-.29l4.3 1.93z" />
    </IconBase>
  ))
);

ChartLineFillDuotone.displayName = 'ChartLineFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineFillDuotone, ChartLineFillDuotone as ChartLineFillDuotoneIcon, ChartLineFillDuotone as SiChartLineFillDuotone };
export default ChartLineFillDuotone;
export type { ChartLineFillDuotoneProps };
