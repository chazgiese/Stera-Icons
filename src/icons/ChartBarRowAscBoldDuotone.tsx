import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-bold-duotone" {...props}>
      <path d="M18 15.92a.25.25 0 0 0-.25-.25H6v-2h8.25c.14 0 .25-.12.25-.25v-2.84a.25.25 0 0 0-.25-.25H6v-2h4.75q.23-.01.25-.25V5.25a.25.25 0 0 0-.25-.25H6V3h4.75C11.99 3 13 4 13 5.25v2.83l-.01.25h1.26c1.24 0 2.25 1.01 2.25 2.25v2.84l-.01.25h1.26c1.24 0 2.25 1 2.25 2.25v2.83c0 1.24-1 2.25-2.25 2.25H6v-2h11.75q.23-.02.25-.25z" opacity={.4} />
        <path d="M6 21a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0z" />
    </IconBase>
  ))
);

ChartBarRowAscBoldDuotone.displayName = 'ChartBarRowAscBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscBoldDuotone, ChartBarRowAscBoldDuotone as ChartBarRowAscBoldDuotoneIcon, ChartBarRowAscBoldDuotone as SiChartBarRowAscBoldDuotone };
export default ChartBarRowAscBoldDuotone;
export type { ChartBarRowAscBoldDuotoneProps };
