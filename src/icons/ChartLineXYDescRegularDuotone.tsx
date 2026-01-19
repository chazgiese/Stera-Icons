import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineXYDescRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-x-y-desc-duotone" {...props}>
      <path fill="currentColor" d="M2 3.25c.41 0 .75.34.75.75v12.8q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H22a.75.75 0 0 1 0 1.5H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M5.5 6.45a.75.75 0 0 1 1.05.04l5 5.45 2.65-2.4.12-.09a.75.75 0 0 1 .94.15l5.3 5.9a.75.75 0 0 1-1.12 1l-4.8-5.34-2.64 2.4a.75.75 0 0 1-1.05-.05l-5.5-6a.75.75 0 0 1 .04-1.06" />
    </IconBase>
  ))
);

ChartLineXYDescRegularDuotone.displayName = 'ChartLineXYDescRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineXYDescRegularDuotone, ChartLineXYDescRegularDuotone as ChartLineXYDescRegularDuotoneIcon, ChartLineXYDescRegularDuotone as SiChartLineXYDescRegularDuotone };
export type { ChartLineXYDescRegularDuotoneProps };
