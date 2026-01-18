import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartDonutBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.4 1a11 11 0 0 1 7.38 18.78 1 1 0 0 0 0-1.42l-.75-.74a9 9 0 0 0 1.62-8.12l-3.74 1.55a5 5 0 0 1-.74 3.7l-.63-.63a1 1 0 0 0-1.42 0A3 3 0 0 0 12 9a1 1 0 0 0 1-1v-.9a5 5 0 0 1 2.04.93l.08.06a5 5 0 0 1 .56.53l.05.06q.14.15.25.3l.02.03.14.2 3.74-1.56a9 9 0 0 0-6.61-4.56L13 3.06V2a1 1 0 0 0-1-1z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 3 3 0 1 0 2.12 5.12 1 1 0 0 1 1.41 0l4.25 4.24a1 1 0 0 1 0 1.42A11 11 0 1 1 12 1m-1 2.06a9 9 0 1 0 6.62 15.97l-2.87-2.86A5 5 0 1 1 11 7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartDonutBoldDuotone.displayName = 'ChartDonutBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutBoldDuotone, ChartDonutBoldDuotone as ChartDonutBoldDuotoneIcon, ChartDonutBoldDuotone as SiChartDonutBoldDuotone };
export type { ChartDonutBoldDuotoneProps };
