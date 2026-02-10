import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-fill-duotone" {...props}>
      <path d="M12 16.75c0-.69-.56-1.25-1.25-1.25H6v5h4.75c.69 0 1.25-.56 1.25-1.25zM16 10.75c0-.69-.56-1.25-1.25-1.25H6v5h8.75c.69 0 1.25-.56 1.25-1.25zM19 4.75c0-.69-.56-1.25-1.25-1.25H6v5h11.75c.69 0 1.25-.56 1.25-1.25z" opacity={0.4} />
        <path fill="currentColor" d="M6 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z" />
    </IconBase>
  ))
);

ChartBarRowDescFillDuotone.displayName = 'ChartBarRowDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescFillDuotone, ChartBarRowDescFillDuotone as ChartBarRowDescFillDuotoneIcon, ChartBarRowDescFillDuotone as SiChartBarRowDescFillDuotone };
export default ChartBarRowDescFillDuotone;
export type { ChartBarRowDescFillDuotoneProps };
