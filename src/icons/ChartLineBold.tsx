import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineBold = memo(
  forwardRef<SVGSVGElement, ChartLineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-bold" {...props}>
      <path d="M21 18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM19.23 4.36a1 1 0 0 1 1.54 1.28l-5.34 6.4a1 1 0 0 1-1.17.27l-4.67-2.1-4.84 5.45a1 1 0 1 1-1.5-1.32l5.34-6 .11-.12a1 1 0 0 1 1.04-.13l4.64 2.09z" />
    </IconBase>
  ))
);

ChartLineBold.displayName = 'ChartLineBold';

// Triple export pattern (lucide-react style)
export { ChartLineBold, ChartLineBold as ChartLineBoldIcon, ChartLineBold as SiChartLineBold };
export default ChartLineBold;
export type { ChartLineBoldProps };
