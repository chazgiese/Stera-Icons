import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowAscBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 0 1 1 1h5.75C11.99 2 13 3 13 4.25v3.5l-.01.25h1.76C15.99 8 17 9 17 10.25v3.5l-.01.25h1.76c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25H5v.1a1 1 0 0 1-2-.1V2a1 1 0 0 1 1-1m1 15v4h13.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25zm0-2h9.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5zm0-6h5.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowAscBold.displayName = 'ChartBarRowAscBold';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscBold, ChartBarRowAscBold as ChartBarRowAscBoldIcon, ChartBarRowAscBold as SiChartBarRowAscBold };
export type { ChartBarRowAscBoldProps };
