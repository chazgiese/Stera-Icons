import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarDescBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarDescBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-desc-bold-duotone" {...props}>
      <path fill="currentColor" d="M4.25 3C3.01 3 2 4 2 5.25V19h2V5.25c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25V19h2V9.25q.02-.23.25-.25h3.5q.23.02.25.25V19h2v-5.75q.02-.23.25-.25h3.5q.23.02.25.25V19h2v-5.75c0-1.24-1-2.25-2.25-2.25h-3.5l-.25.01V9.25C16 8.01 15 7 13.75 7h-3.5l-.25.01V5.25C10 4.01 9 3 7.75 3z" opacity={.4} />
        <path fill="currentColor" d="M2 19a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" />
    </IconBase>
  ))
);

ChartBarDescBoldDuotone.displayName = 'ChartBarDescBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarDescBoldDuotone, ChartBarDescBoldDuotone as ChartBarDescBoldDuotoneIcon, ChartBarDescBoldDuotone as SiChartBarDescBoldDuotone };
export default ChartBarDescBoldDuotone;
export type { ChartBarDescBoldDuotoneProps };
