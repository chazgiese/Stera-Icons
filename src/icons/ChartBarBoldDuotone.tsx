import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.92 9.5a.25.25 0 0 0-.25.25V18h-2v-4.75a.25.25 0 0 0-.25-.25h-2.84a.25.25 0 0 0-.25.25V18h-2V6.25A.25.25 0 0 0 8.08 6H5.25a.25.25 0 0 0-.25.25V18H3V6.25C3 5.01 4 4 5.25 4h2.83c1.25 0 2.25 1 2.25 2.25v4.76l.25-.01h2.84l.25.01V9.75c0-1.24 1-2.25 2.25-2.25h2.83c1.24 0 2.25 1 2.25 2.25V18h-2V9.75a.25.25 0 0 0-.25-.25z" opacity={.4} />
        <path fill="currentColor" d="M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarBoldDuotone.displayName = 'ChartBarBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarBoldDuotone, ChartBarBoldDuotone as ChartBarBoldDuotoneIcon, ChartBarBoldDuotone as SiChartBarBoldDuotone };
export default ChartBarBoldDuotone;
export type { ChartBarBoldDuotoneProps };
