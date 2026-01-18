import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.75 16c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM12.75 9.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM20.75 3c.69 0 1.25.56 1.25 1.25v2.5C22 7.44 21.44 8 20.75 8H5V3z" />
        <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowFillDuotone.displayName = 'ChartBarRowFillDuotone';

export { ChartBarRowFillDuotone };
export type { ChartBarRowFillDuotoneProps };
