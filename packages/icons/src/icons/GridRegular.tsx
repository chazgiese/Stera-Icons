import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridRegularProps = Omit<IconBaseProps, 'children'>;

const GridRegular = memo(
  forwardRef<SVGSVGElement, GridRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v5.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.4q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.85 13.5v4.5h4.5v-4.5zm-6 0q.01.83.05 1.42c.05.62.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3q.59.04 1.42.04v-4.49zm12 0v4.5q.83-.01 1.42-.05c.62-.05 1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31q.04-.59.05-1.42zm-12-1.5h4.5v-4.5h-4.5zm6 0h4.5v-4.5h-4.5zm6 0h4.5v-4.5h-4.5zm-7.5-10.5q-.83.01-1.42.05c-.62.05-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31q-.04.59-.05 1.42h4.5zm1.5 4.5h4.5v-4.5h-4.5zm6 0h4.5q0-.83-.05-1.42c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3q-.59-.04-1.42-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridRegular.displayName = 'GridRegular';

// Triple export pattern
export { GridRegular, GridRegular as GridRegularIcon, GridRegular as SiGridRegular };
export default GridRegular;
export type { GridRegularProps };
