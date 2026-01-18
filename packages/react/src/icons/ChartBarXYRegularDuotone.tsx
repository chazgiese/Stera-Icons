import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarXYRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarXYRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 3.25c.41 0 .75.34.75.75v14l.01.76.04.22q.08.15.22.22l.22.04.76.01h18a.75.75 0 0 1 0 1.5H4q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M7 12.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M11 5.25c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75M15 10.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.41.34-.75.75-.75M19 7.25c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarXYRegularDuotone.displayName = 'ChartBarXYRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarXYRegularDuotone, ChartBarXYRegularDuotone as ChartBarXYRegularDuotoneIcon, ChartBarXYRegularDuotone as SiChartBarXYRegularDuotone };
export type { ChartBarXYRegularDuotoneProps };
