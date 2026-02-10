import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-candle-alt-bold-duotone" {...props}>
      <path d="M5 20a1 1 0 1 1-2 0v-1.02l.25.02h1.5q.13 0 .25-.02zM21 19a1 1 0 1 1-2 0v-1.02l.25.02h1.5q.13 0 .25-.02zM13 18a1 1 0 1 1-2 0v-3.02l.25.02h1.5q.13 0 .25-.02zM4 5a1 1 0 0 1 1 1v3.01L4.75 9h-1.5L3 9.01V6a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.01L12.75 7h-1.5l-.25.01V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.01L20.75 5h-1.5l-.25.01V4a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.75 9C5.99 9 7 10 7 11.25v5.5C7 17.99 6 19 4.75 19h-1.5C2.01 19 1 18 1 16.75v-5.5C1 10.01 2 9 3.25 9zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25zM20.75 5C21.99 5 23 6 23 7.25v8.5c0 1.24-1 2.25-2.25 2.25h-1.5C18.01 18 17 17 17 15.75v-8.5C17 6.01 18 5 19.25 5zm-1.5 2a.25.25 0 0 0-.25.25v8.5q.02.23.25.25h1.5q.23-.02.25-.25v-8.5a.25.25 0 0 0-.25-.25zM12.75 7C13.99 7 15 8 15 9.25v3.5c0 1.24-1 2.25-2.25 2.25h-1.5C10.01 15 9 14 9 12.75v-3.5C9 8.01 10 7 11.25 7zm-1.5 2a.25.25 0 0 0-.25.25v3.5q.02.23.25.25h1.5q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleAltBoldDuotone.displayName = 'ChartCandleAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleAltBoldDuotone, ChartCandleAltBoldDuotone as ChartCandleAltBoldDuotoneIcon, ChartCandleAltBoldDuotone as SiChartCandleAltBoldDuotone };
export default ChartCandleAltBoldDuotone;
export type { ChartCandleAltBoldDuotoneProps };
