import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-bold-duotone" {...props}>
      <path d="M23 5v12.93c0 1.14-.93 2.07-2.07 2.07H2.03a1 1 0 0 0 .7-.31L4.32 18h16.6q.06 0 .07-.07V7.5l1.72-1.81a1 1 0 0 0 .28-.7z" opacity={.4} />
        <path d="M21.28 4.31a1 1 0 0 1 1.44 1.38l-9.04 9.5a1 1 0 0 1-1.45 0l-2.61-2.74-6.9 7.24a1 1 0 0 1-1.44-1.38l7.61-8 .08-.07a1 1 0 0 1 1.37.07l2.61 2.74z" />
    </IconBase>
  ))
);

ChartAreaBoldDuotone.displayName = 'ChartAreaBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartAreaBoldDuotone, ChartAreaBoldDuotone as ChartAreaBoldDuotoneIcon, ChartAreaBoldDuotone as SiChartAreaBoldDuotone };
export default ChartAreaBoldDuotone;
export type { ChartAreaBoldDuotoneProps };
