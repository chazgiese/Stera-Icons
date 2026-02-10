import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M8.08 6c.14 0 .25.11.25.25V18h2V9.75c0-.14.12-.25.25-.25h2.84c.13 0 .25.11.25.25V18h2v-4.75q.01-.23.25-.25h2.83q.23.02.25.25V18h2v-4.75c0-1.24-1-2.25-2.25-2.25h-2.83l-.25.01V9.75c0-1.24-1.01-2.25-2.25-2.25h-2.84l-.25.01V6.25c0-1.24-1-2.25-2.25-2.25H5.25C4.01 4 3 5 3 6.25V18h2V6.25c0-.14.11-.25.25-.25z" opacity={.4} />
        <path fill="currentColor" d="M3 18a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ChartBarDescBoldDuotone.displayName = 'ChartBarDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescBoldDuotone, ChartBarDescBoldDuotone as ChartBarDescBoldDuotoneIcon, ChartBarDescBoldDuotone as SiChartBarDescBoldDuotone };
export default ChartBarDescBoldDuotone;
export type { ChartBarDescBoldDuotoneProps };
