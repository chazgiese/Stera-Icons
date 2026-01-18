import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M20.2 3.4a1 1 0 0 1 1.6 1.2l-6 8a1 1 0 0 1-1.25.3l-5.27-2.64-5.5 6.87a1 1 0 0 1-1.56-1.25l6-7.5a1 1 0 0 1 1.23-.27l5.25 2.62z" />
    </IconBase>
  ))
);

ChartLineBoldDuotone.displayName = 'ChartLineBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartLineBoldDuotone, ChartLineBoldDuotone as ChartLineBoldDuotoneIcon, ChartLineBoldDuotone as SiChartLineBoldDuotone };
export type { ChartLineBoldDuotoneProps };
