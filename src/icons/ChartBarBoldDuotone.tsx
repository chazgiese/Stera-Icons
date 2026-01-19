import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-bold-duotone" {...props}>
      <path fill="currentColor" d="M16.25 9a.25.25 0 0 0-.25.25V19h-2v-5.75a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V19H8V5.25A.25.25 0 0 0 7.75 5h-3.5a.25.25 0 0 0-.25.25V19H2V5.25C2 4.01 3 3 4.25 3h3.5C8.99 3 10 4 10 5.25v5.76l.25-.01h3.5l.25.01V9.25C14 8.01 15 7 16.25 7h3.5C20.99 7 22 8 22 9.25V19h-2V9.25a.25.25 0 0 0-.25-.25z" opacity={.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarBoldDuotone.displayName = 'ChartBarBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarBoldDuotone, ChartBarBoldDuotone as ChartBarBoldDuotoneIcon, ChartBarBoldDuotone as SiChartBarBoldDuotone };
export type { ChartBarBoldDuotoneProps };
