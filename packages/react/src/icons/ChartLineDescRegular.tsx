import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescRegular = memo(
  forwardRef<SVGSVGElement, ChartLineDescRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM2.55 3.4a.75.75 0 0 1 1.05.15l5.62 7.5 5.44-2.72c.32-.16.7-.07.93.2l6 7.5a.75.75 0 0 1-1.18.94L14.8 9.94l-5.46 2.73a.75.75 0 0 1-.93-.22l-6-8a.75.75 0 0 1 .15-1.05" />
    </IconBase>
  ))
);

ChartLineDescRegular.displayName = 'ChartLineDescRegular';

// Triple export pattern (lucide-react style)
export { ChartLineDescRegular, ChartLineDescRegular as ChartLineDescRegularIcon, ChartLineDescRegular as SiChartLineDescRegular };
export type { ChartLineDescRegularProps };
