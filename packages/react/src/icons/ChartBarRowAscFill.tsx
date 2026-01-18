import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v1h6.75c.69 0 1.25.56 1.25 1.25v2.5C13 7.44 12.44 8 11.75 8H5v1.5h10.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5V16h14.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowAscFill.displayName = 'ChartBarRowAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscFill, ChartBarRowAscFill as ChartBarRowAscFillIcon, ChartBarRowAscFill as SiChartBarRowAscFill };
export type { ChartBarRowAscFillProps };
