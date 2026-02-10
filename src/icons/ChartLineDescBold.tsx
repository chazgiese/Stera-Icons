import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescBold = memo(
  forwardRef<SVGSVGElement, ChartLineDescBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-bold" {...props}>
      <path fill="currentColor" d="M21 18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM3.36 4.23a1 1 0 0 1 1.4.13l4.86 5.82 4.64-2.1a1 1 0 0 1 1.04.14l.11.12 5.34 6a1 1 0 1 1-1.5 1.32l-4.84-5.45-4.67 2.1a1 1 0 0 1-1.17-.27l-5.34-6.4a1 1 0 0 1 .13-1.4" />
    </IconBase>
  ))
);

ChartLineDescBold.displayName = 'ChartLineDescBold';

// Triple export pattern (lucide-react style)
export { ChartLineDescBold, ChartLineDescBold as ChartLineDescBoldIcon, ChartLineDescBold as SiChartLineDescBold };
export default ChartLineDescBold;
export type { ChartLineDescBoldProps };
