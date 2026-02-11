import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegular = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc" {...props}>
      <path fillRule="evenodd" d="M8.08 4.25a2 2 0 0 1 2 2v1.57a2 2 0 0 1 .5-.07h2.84a2 2 0 0 1 2 2v1.57a2 2 0 0 1 .5-.07h2.83a2 2 0 0 1 2 2v5H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-12c0-1.1.9-2 2-2zm-2.83 1.5a.5.5 0 0 0-.5.5v12h3.83v-12a.5.5 0 0 0-.5-.5zm5.33 3.5a.5.5 0 0 0-.5.5v8.5h3.84v-8.5a.5.5 0 0 0-.5-.5zm5.34 3.5a.5.5 0 0 0-.5.5v5h3.83v-5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarDescRegular.displayName = 'ChartBarDescRegular';

// Triple export pattern (lucide-react style)
export { ChartBarDescRegular, ChartBarDescRegular as ChartBarDescRegularIcon, ChartBarDescRegular as SiChartBarDescRegular };
export default ChartBarDescRegular;
export type { ChartBarDescRegularProps };
