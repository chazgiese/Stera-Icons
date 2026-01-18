import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartAreaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M23.5 17.75c0 1.24-1 2.25-2.25 2.25H1.5a1 1 0 0 0 .7-.3L3.92 18h17.34q.23-.02.25-.25V7.41l1.7-1.7.1-.12.01-.01a1 1 0 0 0 .19-.5V5z" opacity={.4} />
        <path fill="currentColor" d="M21.8 4.3a1 1 0 1 1 1.4 1.4l-9.5 9.5a1 1 0 0 1-1.4 0l-2.8-2.79-7.3 7.3a1 1 0 1 1-1.4-1.42l8-8 .07-.06a1 1 0 0 1 1.34.06L13 13.1z" />
    </IconBase>
  ))
);

ChartAreaBoldDuotone.displayName = 'ChartAreaBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaBoldDuotone, ChartAreaBoldDuotone as ChartAreaBoldDuotoneIcon, ChartAreaBoldDuotone as SiChartAreaBoldDuotone };
export type { ChartAreaBoldDuotoneProps };
