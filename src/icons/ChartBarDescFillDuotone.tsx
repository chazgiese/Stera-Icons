import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-fill-duotone" {...props}>
      <path d="M16.75 12c-.69 0-1.25.56-1.25 1.25V18h5v-4.75c0-.69-.56-1.25-1.25-1.25zM10.75 8c-.69 0-1.25.56-1.25 1.25V18h5V9.25c0-.69-.56-1.25-1.25-1.25zM4.75 5c-.69 0-1.25.56-1.25 1.25V18h5V6.25C8.5 5.56 7.94 5 7.25 5z" opacity={0.4} />
        <path fill="currentColor" d="M3 18a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ChartBarDescFillDuotone.displayName = 'ChartBarDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescFillDuotone, ChartBarDescFillDuotone as ChartBarDescFillDuotoneIcon, ChartBarDescFillDuotone as SiChartBarDescFillDuotone };
export default ChartBarDescFillDuotone;
export type { ChartBarDescFillDuotoneProps };
