import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M3.36 4.23a1 1 0 0 1 1.4.13l4.86 5.82 4.64-2.1a1 1 0 0 1 1.04.14l.11.12 5.34 6a1 1 0 1 1-1.5 1.32l-4.84-5.45-4.67 2.1a1 1 0 0 1-1.17-.27l-5.34-6.4a1 1 0 0 1 .13-1.4" />
    </IconBase>
  ))
);

ChartLineDescBoldDuotone.displayName = 'ChartLineDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineDescBoldDuotone, ChartLineDescBoldDuotone as ChartLineDescBoldDuotoneIcon, ChartLineDescBoldDuotone as SiChartLineDescBoldDuotone };
export default ChartLineDescBoldDuotone;
export type { ChartLineDescBoldDuotoneProps };
