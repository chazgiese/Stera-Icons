import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-waterfall-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12.75 8C13.99 8 15 9 15 10.25v3.5c0 1.24-1 2.25-2.25 2.25h-1.5C10.01 16 9 15 9 13.75v-3.5C9 9.01 10 8 11.25 8zm-1.5 2a.25.25 0 0 0-.25.25v3.5q.02.23.25.25h1.5q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M4.75 11C5.99 11 7 12 7 13.25v5.5C7 19.99 6 21 4.75 21h-1.5C2.01 21 1 20 1 18.75v-5.5C1 12.01 2 11 3.25 11zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25zM20.75 3C21.99 3 23 4 23 5.25v9.5c0 1.24-1 2.25-2.25 2.25h-1.5C18.01 17 17 16 17 14.75v-9.5C17 4.01 18 3 19.25 3zm-1.5 2a.25.25 0 0 0-.25.25v9.5q.02.23.25.25h1.5q.23-.02.25-.25v-9.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallBoldDuotone.displayName = 'ChartWaterfallBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallBoldDuotone, ChartWaterfallBoldDuotone as ChartWaterfallBoldDuotoneIcon, ChartWaterfallBoldDuotone as SiChartWaterfallBoldDuotone };
export default ChartWaterfallBoldDuotone;
export type { ChartWaterfallBoldDuotoneProps };
