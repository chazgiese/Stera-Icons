import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallXBoldProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXBold = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-x-bold" {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5.75 7.6C6.99 7.6 8 8.6 8 9.85v5.5c0 1.24-1 2.25-2.25 2.25h-1.5c-1.24 0-2.25-1-2.25-2.25v-5.5C2 8.61 3 7.6 4.25 7.6zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25zM19.75 3C20.99 3 22 4 22 5.25v7.5c0 1.24-1 2.25-2.25 2.25h-1.5C17.01 15 16 14 16 12.75v-7.5C16 4.01 17 3 18.25 3zm-1.5 2a.25.25 0 0 0-.25.25v7.5q.02.23.25.25h1.5q.23-.02.25-.25v-7.5a.25.25 0 0 0-.25-.25zM12.75 6C13.99 6 15 7 15 8.25v3.5c0 1.24-1 2.25-2.25 2.25h-1.5C10.01 14 9 13 9 11.75v-3.5C9 7.01 10 6 11.25 6zm-1.5 2a.25.25 0 0 0-.25.25v3.5q.02.23.25.25h1.5q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallXBold.displayName = 'ChartWaterfallXBold';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXBold, ChartWaterfallXBold as ChartWaterfallXBoldIcon, ChartWaterfallXBold as SiChartWaterfallXBold };
export default ChartWaterfallXBold;
export type { ChartWaterfallXBoldProps };
