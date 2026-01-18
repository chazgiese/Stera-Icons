import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineBarFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarFill = memo(
  forwardRef<SVGSVGElement, ChartLineBarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 18c.83 0 1.5.67 1.5 1.5v.5a1.5 1.5 0 0 1-3 0v-.5c0-.83.67-1.5 1.5-1.5M9 14c.83 0 1.5.67 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-4.5c0-.83.67-1.5 1.5-1.5M13 15.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5M17 13c.83 0 1.5.67 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-5.5c0-.83.67-1.5 1.5-1.5M21 9c.83 0 1.5.67 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-9.5c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M20.91 2.97a1.5 1.5 0 1 1 2.18 2.06l-9 9.5a1.5 1.5 0 0 1-2.15.03L9.5 12.12l-6.44 6.44a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5.1-.1a1.5 1.5 0 0 1 2.02.1l2.41 2.4z" />
    </IconBase>
  ))
);

ChartLineBarFill.displayName = 'ChartLineBarFill';

// Triple export pattern (lucide-react style)
export { ChartLineBarFill, ChartLineBarFill as ChartLineBarFillIcon, ChartLineBarFill as SiChartLineBarFill };
export type { ChartLineBarFillProps };
