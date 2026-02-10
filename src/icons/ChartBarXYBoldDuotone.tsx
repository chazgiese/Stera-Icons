import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarXYBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-x-y-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 4a1 1 0 0 1 1 1v12l.03.87q.04.06.1.1l.13.02L5 18h16a1 1 0 1 1 0 2H5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 17.5 2 17V5a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M7 12a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M11 5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M19 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarXYBoldDuotone.displayName = 'ChartBarXYBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarXYBoldDuotone, ChartBarXYBoldDuotone as ChartBarXYBoldDuotoneIcon, ChartBarXYBoldDuotone as SiChartBarXYBoldDuotone };
export default ChartBarXYBoldDuotone;
export type { ChartBarXYBoldDuotoneProps };
