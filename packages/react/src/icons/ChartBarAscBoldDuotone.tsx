import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarAscBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarAscBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.75 3C20.99 3 22 4 22 5.25V19h-2V5.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V19h-2V9.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V19H8v-5.75a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V19H2v-5.75C2 12.01 3 11 4.25 11h3.5l.25.01V9.25C8 8.01 9 7 10.25 7h3.5l.25.01V5.25C14 4.01 15 3 16.25 3z" opacity={.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChartBarAscBoldDuotone.displayName = 'ChartBarAscBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarAscBoldDuotone, ChartBarAscBoldDuotone as ChartBarAscBoldDuotoneIcon, ChartBarAscBoldDuotone as SiChartBarAscBoldDuotone };
export type { ChartBarAscBoldDuotoneProps };
