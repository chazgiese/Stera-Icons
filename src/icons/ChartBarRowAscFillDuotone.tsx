import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-fill-duotone" {...props}>
      <path d="M12 7.25c0 .69-.56 1.25-1.25 1.25H6v-5h4.75c.69 0 1.25.56 1.25 1.25zM16 13.25c0 .69-.56 1.25-1.25 1.25H6v-5h8.75c.69 0 1.25.56 1.25 1.25zM19 19.25c0 .69-.56 1.25-1.25 1.25H6v-5h11.75c.69 0 1.25.56 1.25 1.25z" opacity={0.4} />
        <path fill="currentColor" d="M6 21a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0z" />
    </IconBase>
  ))
);

ChartBarRowAscFillDuotone.displayName = 'ChartBarRowAscFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscFillDuotone, ChartBarRowAscFillDuotone as ChartBarRowAscFillDuotoneIcon, ChartBarRowAscFillDuotone as SiChartBarRowAscFillDuotone };
export default ChartBarRowAscFillDuotone;
export type { ChartBarRowAscFillDuotoneProps };
