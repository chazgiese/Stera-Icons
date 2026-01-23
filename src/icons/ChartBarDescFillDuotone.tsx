import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-fill-duotone" {...props}>
      <path d="M17.25 11c-.69 0-1.25.56-1.25 1.25V19h5v-6.75c0-.69-.56-1.25-1.25-1.25zM10.75 7c-.69 0-1.25.56-1.25 1.25V19h5V8.25c0-.69-.56-1.25-1.25-1.25zM4.25 3C3.56 3 3 3.56 3 4.25V19h5V4.25C8 3.56 7.44 3 6.75 3z" opacity={0.4} />
        <path fill="currentColor" d="M2 19a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ChartBarDescFillDuotone.displayName = 'ChartBarDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescFillDuotone, ChartBarDescFillDuotone as ChartBarDescFillDuotoneIcon, ChartBarDescFillDuotone as SiChartBarDescFillDuotone };
export default ChartBarDescFillDuotone;
export type { ChartBarDescFillDuotoneProps };
