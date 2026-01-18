import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartCandleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 20a1 1 0 1 1-2 0v-1.02l.25.02h1.5q.13 0 .25-.02zM21 19a1 1 0 1 1-2 0v-1.02l.25.02h1.5q.13 0 .25-.02zM13 18a1 1 0 1 1-2 0v-3.02l.25.02h1.5q.13 0 .25-.02zM4 5a1 1 0 0 1 1 1v3.01L4.75 9h-1.5L3 9.01V6a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.01L12.75 7h-1.5l-.25.01V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.01L20.75 5h-1.5l-.25.01V4a1 1 0 0 1 1-1" />
        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M18 7.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zM10 9.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zM2 11.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v5.5C6 17.44 5.44 18 4.75 18h-1.5C2.56 18 2 17.44 2 16.75z" />
    </IconBase>
  ))
);

ChartCandleAltBoldDuotone.displayName = 'ChartCandleAltBoldDuotone';

export { ChartCandleAltBoldDuotone };
export type { ChartCandleAltBoldDuotoneProps };
