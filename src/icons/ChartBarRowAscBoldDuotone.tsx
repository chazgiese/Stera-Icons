import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowAscBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-bold-duotone" {...props}>
      <path fill="currentColor" d="M10.75 2C11.99 2 13 3 13 4.25v3.5l-.01.25h1.76C15.99 8 17 9 17 10.25v3.5l-.01.25h1.76c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25H5v-2h13.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5v-2h9.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5V8h5.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H5V2z" opacity={.4} />
        <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowAscBoldDuotone.displayName = 'ChartBarRowAscBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscBoldDuotone, ChartBarRowAscBoldDuotone as ChartBarRowAscBoldDuotoneIcon, ChartBarRowAscBoldDuotone as SiChartBarRowAscBoldDuotone };
export type { ChartBarRowAscBoldDuotoneProps };
