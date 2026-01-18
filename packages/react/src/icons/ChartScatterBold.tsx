import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartScatterBoldProps = Omit<IconBaseProps, 'children'>;

const ChartScatterBold = memo(
  forwardRef<SVGSVGElement, ChartScatterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 3a1 1 0 0 1 1 1v12.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H21a1 1 0 1 1 0 2H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8V4a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M6.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M11.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ChartScatterBold.displayName = 'ChartScatterBold';

// Triple export pattern (lucide-react style)
export { ChartScatterBold, ChartScatterBold as ChartScatterBoldIcon, ChartScatterBold as SiChartScatterBold };
export type { ChartScatterBoldProps };
