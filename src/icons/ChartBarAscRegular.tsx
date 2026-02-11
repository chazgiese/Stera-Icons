import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscRegular = memo(
  forwardRef<SVGSVGElement, ChartBarAscRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-asc" {...props}>
      <path fillRule="evenodd" d="M18.75 4.25a2 2 0 0 1 2 2v12H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-5c0-1.1.9-2 2-2h2.83a2 2 0 0 1 .5.07V9.75c0-1.1.9-2 2-2h2.84a2 2 0 0 1 .5.07V6.25c0-1.1.9-2 2-2zm-13.5 8.5a.5.5 0 0 0-.5.5v5h3.83v-5a.5.5 0 0 0-.5-.5zm5.33-3.5a.5.5 0 0 0-.5.5v8.5h3.84v-8.5a.5.5 0 0 0-.5-.5zm5.34-3.5a.5.5 0 0 0-.5.5v12h3.83v-12a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarAscRegular.displayName = 'ChartBarAscRegular';

// Triple export pattern (lucide-react style)
export { ChartBarAscRegular, ChartBarAscRegular as ChartBarAscRegularIcon, ChartBarAscRegular as SiChartBarAscRegular };
export default ChartBarAscRegular;
export type { ChartBarAscRegularProps };
