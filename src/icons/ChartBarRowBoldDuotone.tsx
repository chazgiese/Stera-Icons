import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-bold-duotone" {...props}>
      <path fill="currentColor" d="M14.5 15.92a.25.25 0 0 0-.25-.25H6v-2h4.75c.14 0 .25-.12.25-.25v-2.84a.25.25 0 0 0-.25-.25H6v-2h11.75q.23-.01.25-.25V5.25a.25.25 0 0 0-.25-.25H6V3h11.75C18.99 3 20 4 20 5.25v2.83c0 1.25-1 2.25-2.25 2.25h-4.76l.01.25v2.84l-.01.25h1.26c1.24 0 2.25 1 2.25 2.25v2.83c0 1.24-1 2.25-2.25 2.25H6v-2h8.25q.23-.02.25-.25z" opacity={.4} />
        <path fill="currentColor" d="M6 21a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0z" />
    </IconBase>
  ))
);

ChartBarRowBoldDuotone.displayName = 'ChartBarRowBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowBoldDuotone, ChartBarRowBoldDuotone as ChartBarRowBoldDuotoneIcon, ChartBarRowBoldDuotone as SiChartBarRowBoldDuotone };
export default ChartBarRowBoldDuotone;
export type { ChartBarRowBoldDuotoneProps };
