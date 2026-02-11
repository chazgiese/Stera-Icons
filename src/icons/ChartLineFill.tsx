import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineFill = memo(
  forwardRef<SVGSVGElement, ChartLineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-fill" {...props}>
      <path d="M21 17.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM18.85 4.04a1.5 1.5 0 0 1 2.3 1.92l-5.33 6.4a1.5 1.5 0 0 1-1.77.4l-4.33-1.94L5.12 16a1.5 1.5 0 0 1-2.24-2L8.2 8l.09-.08a1.5 1.5 0 0 1 1.65-.29l4.3 1.93z" />
    </IconBase>
  ))
);

ChartLineFill.displayName = 'ChartLineFill';

// Triple export pattern (lucide-react style)
export { ChartLineFill, ChartLineFill as ChartLineFillIcon, ChartLineFill as SiChartLineFill };
export default ChartLineFill;
export type { ChartLineFillProps };
