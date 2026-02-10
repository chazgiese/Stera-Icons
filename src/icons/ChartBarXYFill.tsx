import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYFill = memo(
  forwardRef<SVGSVGElement, ChartBarXYFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-x-y-fill" {...props}>
      <path fill="currentColor" d="M3 3.5c.83 0 1.5.67 1.5 1.5v12.5H21a1.5 1.5 0 0 1 0 3H5q-.5 0-.94-.02c-.3-.03-.68-.09-1.06-.28A2.8 2.8 0 0 1 1.8 19c-.2-.38-.25-.76-.28-1.06q-.03-.43-.02-.94V5c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M7 11.5c.83 0 1.5.67 1.5 1.5v2.25a1.5 1.5 0 0 1-3 0V13c0-.83.67-1.5 1.5-1.5M11 4.5c.83 0 1.5.67 1.5 1.5v9.25a1.5 1.5 0 0 1-3 0V6c0-.83.67-1.5 1.5-1.5M15 9.5c.83 0 1.5.67 1.5 1.5v4.25a1.5 1.5 0 0 1-3 0V11c0-.83.67-1.5 1.5-1.5M19 6.5c.83 0 1.5.67 1.5 1.5v7.25a1.5 1.5 0 0 1-3 0V8c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ChartBarXYFill.displayName = 'ChartBarXYFill';

// Triple export pattern (lucide-react style)
export { ChartBarXYFill, ChartBarXYFill as ChartBarXYFillIcon, ChartBarXYFill as SiChartBarXYFill };
export default ChartBarXYFill;
export type { ChartBarXYFillProps };
