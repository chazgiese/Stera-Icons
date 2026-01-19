import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-duotone" {...props}>
      <path fill="currentColor" d="M16.25 8.78a.47.47 0 0 0-.47.47v9.97h-1.56v-5.97a.47.47 0 0 0-.47-.47h-3.5a.47.47 0 0 0-.47.47v5.97H8.22V5.25a.47.47 0 0 0-.47-.47h-3.5a.47.47 0 0 0-.47.47v13.97H2.22V5.25c0-1.12.91-2.03 2.03-2.03h3.5c1.12 0 2.03.91 2.03 2.03v6.03q.22-.05.47-.06h3.5q.24 0 .47.06V9.25c0-1.12.91-2.03 2.03-2.03h3.5c1.12 0 2.03.91 2.03 2.03v9.97h-1.56V9.25a.47.47 0 0 0-.47-.47z" opacity={.4} />
        <path fill="currentColor" d="M22 19.22a.78.78 0 0 1 0 1.56H2a.78.78 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

ChartBarRegularDuotone.displayName = 'ChartBarRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRegularDuotone, ChartBarRegularDuotone as ChartBarRegularDuotoneIcon, ChartBarRegularDuotone as SiChartBarRegularDuotone };
export default ChartBarRegularDuotone;
export type { ChartBarRegularDuotoneProps };
