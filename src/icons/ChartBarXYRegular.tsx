import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYRegular = memo(
  forwardRef<SVGSVGElement, ChartBarXYRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-x-y" {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v12l.01.76.04.22q.08.15.22.22l.22.04.76.01h16a.75.75 0 0 1 0 1.5H5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V5c0-.41.34-.75.75-.75" />
        <path d="M7 12.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M11 5.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75M15 10.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M19 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarXYRegular.displayName = 'ChartBarXYRegular';

// Triple export pattern (lucide-react style)
export { ChartBarXYRegular, ChartBarXYRegular as ChartBarXYRegularIcon, ChartBarXYRegular as SiChartBarXYRegular };
export default ChartBarXYRegular;
export type { ChartBarXYRegularProps };
