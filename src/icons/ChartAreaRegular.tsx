import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartAreaRegularProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegular = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-area" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.46 4.48a.75.75 0 0 1 1.29.52v12.93c0 1-.82 1.82-1.82 1.82H2a.75.75 0 0 1-.54-1.27l7.62-8 .05-.05a.75.75 0 0 1 1.03.05l2.8 2.93zm-7.97 10.54a.75.75 0 0 1-1.08 0l-2.8-2.93-5.86 6.16h17.18c.18 0 .32-.14.32-.32V6.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaRegular.displayName = 'ChartAreaRegular';

// Triple export pattern (lucide-react style)
export { ChartAreaRegular, ChartAreaRegular as ChartAreaRegularIcon, ChartAreaRegular as SiChartAreaRegular };
export default ChartAreaRegular;
export type { ChartAreaRegularProps };
