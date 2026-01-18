import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescFill = memo(
  forwardRef<SVGSVGElement, ChartBarDescFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.75 3C7.44 3 8 3.56 8 4.25V19h1.5V8.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19H16v-6.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1V4.25C3 3.56 3.56 3 4.25 3z" />
    </IconBase>
  ))
);

ChartBarDescFill.displayName = 'ChartBarDescFill';

// Triple export pattern (lucide-react style)
export { ChartBarDescFill, ChartBarDescFill as ChartBarDescFillIcon, ChartBarDescFill as SiChartBarDescFill };
export type { ChartBarDescFillProps };
