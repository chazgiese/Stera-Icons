import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridRegularDuotone = memo(
  forwardRef<SVGSVGElement, GridRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.75 3.75v4.5h4.5v-4.5h1.5v4.5h4.5v1.5h-4.5v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5h-4.5v-1.5h4.5v-4.5h1.5m0 10.5h4.5v-4.5h-4.5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v5.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.4q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v5.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h5.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridRegularDuotone.displayName = 'GridRegularDuotone';

// Triple export pattern
export { GridRegularDuotone, GridRegularDuotone as GridRegularDuotoneIcon, GridRegularDuotone as SiGridRegularDuotone };
export default GridRegularDuotone;
export type { GridRegularDuotoneProps };
