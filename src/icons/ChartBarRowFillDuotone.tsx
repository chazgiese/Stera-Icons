import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-fill-duotone" {...props}>
      <path d="M19 7.25c0 .69-.56 1.25-1.25 1.25H6v-5h11.75c.69 0 1.25.56 1.25 1.25zM12 13.25c0 .69-.56 1.25-1.25 1.25H6v-5h4.75c.69 0 1.25.56 1.25 1.25zM16 19.25c0 .69-.56 1.25-1.25 1.25H6v-5h8.75c.69 0 1.25.56 1.25 1.25z" opacity={0.4} />
        <path d="M6 21a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0z" />
    </IconBase>
  ))
);

ChartBarRowFillDuotone.displayName = 'ChartBarRowFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowFillDuotone, ChartBarRowFillDuotone as ChartBarRowFillDuotoneIcon, ChartBarRowFillDuotone as SiChartBarRowFillDuotone };
export default ChartBarRowFillDuotone;
export type { ChartBarRowFillDuotoneProps };
