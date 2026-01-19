import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-fill-duotone" {...props}>
      <path d="M6.75 3C7.44 3 8 3.56 8 4.25V19H3V4.25C3 3.56 3.56 3 4.25 3zM13.25 11c.69 0 1.25.56 1.25 1.25V19h-5v-6.75c0-.69.56-1.25 1.25-1.25zM19.75 7c.69 0 1.25.56 1.25 1.25V19h-5V8.25c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarFillDuotone.displayName = 'ChartBarFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarFillDuotone, ChartBarFillDuotone as ChartBarFillDuotoneIcon, ChartBarFillDuotone as SiChartBarFillDuotone };
export type { ChartBarFillDuotoneProps };
