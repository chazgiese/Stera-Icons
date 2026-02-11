import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-duotone" {...props}>
      <path d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M19.42 4.52a.75.75 0 0 1 1.16.96l-5.34 6.4a.75.75 0 0 1-.88.2L9.53 9.91 4.56 15.5a.75.75 0 0 1-1.12-1l5.33-6 .1-.08a.8.8 0 0 1 .77-.1l4.82 2.16z" />
    </IconBase>
  ))
);

ChartLineRegularDuotone.displayName = 'ChartLineRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineRegularDuotone, ChartLineRegularDuotone as ChartLineRegularDuotoneIcon, ChartLineRegularDuotone as SiChartLineRegularDuotone };
export default ChartLineRegularDuotone;
export type { ChartLineRegularDuotoneProps };
