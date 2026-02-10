import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescBold = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-bold" {...props}>
      <path fill="currentColor" d="M3 4a1 1 0 0 1 1 1v10.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H21a1 1 0 1 1 0 2H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M6.4 5.2a1 1 0 0 1 1.4.2l3.82 5.07 3.26-1.75a1 1 0 0 1 1.11.1l.13.13 4.64 5.4a1 1 0 0 1-1.52 1.3l-4.12-4.79-3.31 1.78a1 1 0 0 1-1.28-.28L6.2 6.6a1 1 0 0 1 .2-1.4" />
    </IconBase>
  ))
);

ChartLineXYDescBold.displayName = 'ChartLineXYDescBold';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescBold, ChartLineXYDescBold as ChartLineXYDescBoldIcon, ChartLineXYDescBold as SiChartLineXYDescBold };
export default ChartLineXYDescBold;
export type { ChartLineXYDescBoldProps };
