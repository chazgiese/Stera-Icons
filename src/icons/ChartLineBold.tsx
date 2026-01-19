import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineBold = memo(
  forwardRef<SVGSVGElement, ChartLineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-line-bold" {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM20.2 3.4a1 1 0 1 1 1.6 1.2l-6 8a1 1 0 0 1-1.25.3l-5.27-2.64-5.5 6.87a1 1 0 0 1-1.56-1.25l6-7.5a1 1 0 0 1 1.23-.27l5.25 2.62z" />
    </IconBase>
  ))
);

ChartLineBold.displayName = 'ChartLineBold';

// Triple export pattern (lucide-react style)
export { ChartLineBold, ChartLineBold as ChartLineBoldIcon, ChartLineBold as SiChartLineBold };
export type { ChartLineBoldProps };
