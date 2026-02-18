import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridRegularDuotone = memo(
  forwardRef<SVGSVGElement, GridRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-duotone" {...props}>
      <path fillRule="evenodd" d="M9.92 4.25v4.17h4.16V4.25h1.5v4.17h4.16l.01 1.48v.02h-4.17v4.16h4.17v1.5h-4.17v4.16l-1.48.01h-.02v-4.17H9.92v4.17h-1.5v-4.17H4.26l-.01-1.48v-.02h4.17V9.92H4.25v-1.5h4.17V4.26l1.48-.01zm0 9.83h4.16V9.92H9.92z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridRegularDuotone.displayName = 'GridRegularDuotone';

// Triple export pattern (lucide-react style)
export { GridRegularDuotone, GridRegularDuotone as GridRegularDuotoneIcon, GridRegularDuotone as SiGridRegularDuotone };
export default GridRegularDuotone;
export type { GridRegularDuotoneProps };
