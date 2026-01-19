import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 0 1 1 1h13.75C19.99 2 21 3 21 4.25v3.5C21 8.99 20 10 18.75 10h-5.76l.01.25v3.5l-.01.25h1.76c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25H5v.1a1 1 0 0 1-2-.1V2a1 1 0 0 1 1-1m1 15v4h9.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25zm0-2h5.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5zm0-6h13.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowBold.displayName = 'ChartBarRowBold';

// Triple export pattern (lucide-react style)
export { ChartBarRowBold, ChartBarRowBold as ChartBarRowBoldIcon, ChartBarRowBold as SiChartBarRowBold };
export type { ChartBarRowBoldProps };
