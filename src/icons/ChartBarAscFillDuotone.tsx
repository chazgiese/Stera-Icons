import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-asc-fill-duotone" {...props}>
      <path d="M7.25 12c.69 0 1.25.56 1.25 1.25V18h-5v-4.75c0-.69.56-1.25 1.25-1.25zM13.25 8c.69 0 1.25.56 1.25 1.25V18h-5V9.25c0-.69.56-1.25 1.25-1.25zM19.25 5c.69 0 1.25.56 1.25 1.25V18h-5V6.25c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarAscFillDuotone.displayName = 'ChartBarAscFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarAscFillDuotone, ChartBarAscFillDuotone as ChartBarAscFillDuotoneIcon, ChartBarAscFillDuotone as SiChartBarAscFillDuotone };
export default ChartBarAscFillDuotone;
export type { ChartBarAscFillDuotoneProps };
