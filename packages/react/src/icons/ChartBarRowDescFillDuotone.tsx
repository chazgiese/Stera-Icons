import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 8C20.44 8 21 7.44 21 6.75v-2.5C21 3.56 20.44 3 19.75 3H5v5zM15.75 14.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v5zM11.75 21c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v5z" opacity={0.4} />
        <path fill="currentColor" d="M4 23a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

ChartBarRowDescFillDuotone.displayName = 'ChartBarRowDescFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescFillDuotone, ChartBarRowDescFillDuotone as ChartBarRowDescFillDuotoneIcon, ChartBarRowDescFillDuotone as SiChartBarRowDescFillDuotone };
export type { ChartBarRowDescFillDuotoneProps };
