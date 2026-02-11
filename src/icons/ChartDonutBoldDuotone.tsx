import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut-bold-duotone" {...props}>
      <path d="M12 2a1 1 0 0 0-1 1v1.06a8 8 0 1 0 5.9 14.26l-2.43-2.44A4.6 4.6 0 1 1 11 7.51v.89a1 1 0 0 0 1 1h-.16a2.6 2.6 0 1 0 1.88 4.55l.12-.11a1 1 0 0 0-.07 1.34l.07.07 3.82 3.82a1 1 0 0 0 1.34.07l.07-.07A10 10 0 1 1 12 2" />
        <path fillRule="evenodd" d="M12 2a10 10 0 0 1 7.07 17.07 1 1 0 0 1-1.41 0l-3.82-3.82-.07-.07a1 1 0 0 1 .07-1.34A2.6 2.6 0 0 0 12 9.4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m4.53 9.2a4.6 4.6 0 0 1-.65 3.27l2.44 2.44a8 8 0 0 0 1.4-7.02zM13 7.52a5 5 0 0 1 1.8.84l.06.05.22.18.04.04.4.43.08.1.09.1.08.1 3.18-1.31A8 8 0 0 0 13 4.06z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChartDonutBoldDuotone.displayName = 'ChartDonutBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartDonutBoldDuotone, ChartDonutBoldDuotone as ChartDonutBoldDuotoneIcon, ChartDonutBoldDuotone as SiChartDonutBoldDuotone };
export default ChartDonutBoldDuotone;
export type { ChartDonutBoldDuotoneProps };
