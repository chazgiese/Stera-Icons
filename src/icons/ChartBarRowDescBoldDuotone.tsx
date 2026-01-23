import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M10.75 22c1.24 0 2.25-1 2.25-2.25v-3.5l-.01-.25h1.76c1.24 0 2.25-1 2.25-2.25v-3.5l-.01-.25h1.76C19.99 10 21 9 21 7.75v-3.5C21 3.01 20 2 18.75 2H5v2h13.75c.14 0 .25.11.25.25v3.5c0 .14-.11.25-.25.25H5v2h9.75q.23.02.25.25v3.5q-.02.23-.25.25H5v2h5.75q.23.02.25.25v3.5q-.02.23-.25.25H5v2z" opacity={.4} />
        <path fill="currentColor" d="M4 23a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

ChartBarRowDescBoldDuotone.displayName = 'ChartBarRowDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescBoldDuotone, ChartBarRowDescBoldDuotone as ChartBarRowDescBoldDuotoneIcon, ChartBarRowDescBoldDuotone as SiChartBarRowDescBoldDuotone };
export default ChartBarRowDescBoldDuotone;
export type { ChartBarRowDescBoldDuotoneProps };
