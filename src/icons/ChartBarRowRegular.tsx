import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowRegular = memo(
  forwardRef<SVGSVGElement, ChartBarRowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 1.25c.41 0 .75.34.75.75v.25h14a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-6.07a2 2 0 0 1 .07.5v3.5a2 2 0 0 1-.07.5h2.07a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10V22a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75m.75 14.5v4.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5zm0-1.5h6a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-6zm0-6h14a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-14z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowRegular.displayName = 'ChartBarRowRegular';

// Triple export pattern (lucide-react style)
export { ChartBarRowRegular, ChartBarRowRegular as ChartBarRowRegularIcon, ChartBarRowRegular as SiChartBarRowRegular };
export type { ChartBarRowRegularProps };
