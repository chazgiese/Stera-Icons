import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallBoldProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallBold = memo(
  forwardRef<SVGSVGElement, ChartWaterfallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.75 11C5.99 11 7 12 7 13.25v5.5C7 19.99 6 21 4.75 21h-1.5C2.01 21 1 20 1 18.75v-5.5C1 12.01 2 11 3.25 11zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25zM20.75 3C21.99 3 23 4 23 5.25v9.5c0 1.24-1 2.25-2.25 2.25h-1.5C18.01 17 17 16 17 14.75v-9.5C17 4.01 18 3 19.25 3zm-1.5 2a.25.25 0 0 0-.25.25v9.5q.02.23.25.25h1.5q.23-.02.25-.25v-9.5a.25.25 0 0 0-.25-.25zM12.75 8C13.99 8 15 9 15 10.25v3.5c0 1.24-1 2.25-2.25 2.25h-1.5C10.01 16 9 15 9 13.75v-3.5C9 9.01 10 8 11.25 8zm-1.5 2a.25.25 0 0 0-.25.25v3.5q.02.23.25.25h1.5q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallBold.displayName = 'ChartWaterfallBold';

// Triple export pattern (lucide-react style)
export { ChartWaterfallBold, ChartWaterfallBold as ChartWaterfallBoldIcon, ChartWaterfallBold as SiChartWaterfallBold };
export type { ChartWaterfallBoldProps };
