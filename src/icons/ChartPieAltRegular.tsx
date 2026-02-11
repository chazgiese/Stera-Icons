import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltRegularProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltRegular = memo(
  forwardRef<SVGSVGElement, ChartPieAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt" {...props}>
      <path d="M8.2 3.02a.75.75 0 1 1 .6 1.38 8.25 8.25 0 0 0 6.3 15.25.75.75 0 1 1 .57 1.39A9.75 9.75 0 0 1 8.2 3.02" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 0 1 6.9 16.64c-.3.3-.77.3-1.07 0l-6.36-6.36a.8.8 0 0 1-.22-.53V3c0-.41.34-.75.75-.75m1.32 10.01 5.02 5.02a8.2 8.2 0 0 0 1.54-7.73zm-.57-1.38 6.55-2.72a8.3 8.3 0 0 0-6.55-4.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieAltRegular.displayName = 'ChartPieAltRegular';

// Triple export pattern (lucide-react style)
export { ChartPieAltRegular, ChartPieAltRegular as ChartPieAltRegularIcon, ChartPieAltRegular as SiChartPieAltRegular };
export default ChartPieAltRegular;
export type { ChartPieAltRegularProps };
