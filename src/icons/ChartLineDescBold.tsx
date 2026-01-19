import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescBold = memo(
  forwardRef<SVGSVGElement, ChartLineDescBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-bold" {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM2.4 3.2a1 1 0 0 1 1.4.2l5.5 7.33 5.25-2.62a1 1 0 0 1 1.23.27l6 7.5a1 1 0 0 1-1.56 1.25l-5.5-6.87-5.27 2.63a1 1 0 0 1-1.25-.29l-6-8a1 1 0 0 1 .2-1.4" />
    </IconBase>
  ))
);

ChartLineDescBold.displayName = 'ChartLineDescBold';

// Triple export pattern (lucide-react style)
export { ChartLineDescBold, ChartLineDescBold as ChartLineDescBoldIcon, ChartLineDescBold as SiChartLineDescBold };
export type { ChartLineDescBoldProps };
