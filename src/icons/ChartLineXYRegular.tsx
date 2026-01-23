import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYRegular = memo(
  forwardRef<SVGSVGElement, ChartLineXYRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y" {...props}>
      <path fill="currentColor" d="M2 3a1 1 0 0 1 1 1v12.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H22a1 1 0 1 1 0 2H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8V4a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M19.2 5.41a1 1 0 1 1 1.6 1.18l-4.66 6.4a1 1 0 0 1-1.3.28l-3.6-2-4.47 5.37a1 1 0 0 1-1.54-1.28l5-6a1 1 0 0 1 1.25-.23l3.56 1.97z" />
    </IconBase>
  ))
);

ChartLineXYRegular.displayName = 'ChartLineXYRegular';

// Triple export pattern (lucide-react style)
export { ChartLineXYRegular, ChartLineXYRegular as ChartLineXYRegularIcon, ChartLineXYRegular as SiChartLineXYRegular };
export default ChartLineXYRegular;
export type { ChartLineXYRegularProps };
