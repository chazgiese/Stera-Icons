import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M2.4 3.2a1 1 0 0 1 1.4.2l5.5 7.33 5.25-2.62a1 1 0 0 1 1.23.27l6 7.5a1 1 0 0 1-1.56 1.25l-5.5-6.87-5.27 2.63a1 1 0 0 1-1.25-.29l-6-8a1 1 0 0 1 .2-1.4" />
    </IconBase>
  ))
);

ChartLineDescBoldDuotone.displayName = 'ChartLineDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineDescBoldDuotone, ChartLineDescBoldDuotone as ChartLineDescBoldDuotoneIcon, ChartLineDescBoldDuotone as SiChartLineDescBoldDuotone };
export type { ChartLineDescBoldDuotoneProps };
