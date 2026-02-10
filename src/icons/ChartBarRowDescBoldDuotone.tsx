import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M18 8.08q-.02.23-.25.25H6v2h8.25c.14 0 .25.12.25.25v2.84c0 .13-.11.25-.25.25H6v2h4.75q.23.01.25.25v2.83q-.02.23-.25.25H6v2h4.75c1.24 0 2.25-1 2.25-2.25v-2.83l-.01-.25h1.26c1.24 0 2.25-1.01 2.25-2.25v-2.84l-.01-.25h1.26c1.24 0 2.25-1 2.25-2.25V5.25C20 4.01 19 3 17.75 3H6v2h11.75c.14 0 .25.11.25.25z" opacity={.4} />
        <path fill="currentColor" d="M6 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z" />
    </IconBase>
  ))
);

ChartBarRowDescBoldDuotone.displayName = 'ChartBarRowDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescBoldDuotone, ChartBarRowDescBoldDuotone as ChartBarRowDescBoldDuotoneIcon, ChartBarRowDescBoldDuotone as SiChartBarRowDescBoldDuotone };
export default ChartBarRowDescBoldDuotone;
export type { ChartBarRowDescBoldDuotoneProps };
