import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 16c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM15.75 9.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM11.75 3c.69 0 1.25.56 1.25 1.25v2.5C13 7.44 12.44 8 11.75 8H5V3z" />
        <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowAscFillDuotone.displayName = 'ChartBarRowAscFillDuotone';

export { ChartBarRowAscFillDuotone };
export type { ChartBarRowAscFillDuotoneProps };
