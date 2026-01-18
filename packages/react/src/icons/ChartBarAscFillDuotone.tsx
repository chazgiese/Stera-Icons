import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 11c.69 0 1.25.56 1.25 1.25V19H3v-6.75c0-.69.56-1.25 1.25-1.25zM13.25 7c.69 0 1.25.56 1.25 1.25V19h-5V8.25c0-.69.56-1.25 1.25-1.25zM19.75 3c.69 0 1.25.56 1.25 1.25V19h-5V4.25c0-.69.56-1.25 1.25-1.25z" opacity={0.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarAscFillDuotone.displayName = 'ChartBarAscFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarAscFillDuotone, ChartBarAscFillDuotone as ChartBarAscFillDuotoneIcon, ChartBarAscFillDuotone as SiChartBarAscFillDuotone };
export type { ChartBarAscFillDuotoneProps };
