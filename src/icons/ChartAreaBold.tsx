import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaBoldProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBold = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.28 4.31A1 1 0 0 1 23 5v12.93c0 1.14-.93 2.07-2.07 2.07H2a1 1 0 0 1-.72-1.69l7.61-8 .08-.07a1 1 0 0 1 1.37.07l2.61 2.74zm-7.6 10.88a1 1 0 0 1-1.45 0l-2.61-2.74L4.33 18h16.6q.06 0 .07-.07V7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaBold.displayName = 'ChartAreaBold';

// Triple export pattern (lucide-react style)
export { ChartAreaBold, ChartAreaBold as ChartAreaBoldIcon, ChartAreaBold as SiChartAreaBold };
export default ChartAreaBold;
export type { ChartAreaBoldProps };
