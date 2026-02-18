import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridRegularProps = Omit<IconBaseProps, 'children'>;

const GridRegular = memo(
  forwardRef<SVGSVGElement, GridRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid" {...props}>
      <path fillRule="evenodd" d="M14.77 2.75h.14q1.09 0 1.88.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87a25 25 0 0 1 .06 1.96v5.74q0 1.09-.06 1.88a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46a25 25 0 0 1-1.96.06H9.1q-1.09 0-1.88-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87 25 25 0 0 1-.06-2.02V9.1q0-1.1.06-1.88.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46a25 25 0 0 1 2.02-.06h5.54M9.92 15.58v4.17h4.16v-4.17zm-5.66 0q0 .62.04 1.09c.05.62.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3q.47.04 1.09.04v-4.16zm11.32 0v4.16q.62 0 1.09-.04c.62-.05 1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31q.04-.47.04-1.09zm-11.33-1.5h4.17V9.92H4.25zm5.67 0h4.16V9.92H9.92zm5.66 0h4.17V9.92h-4.17zM8.42 4.26q-.62 0-1.09.04c-.62.05-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31q-.03.47-.04 1.09h4.16zm1.5 4.16h4.16V4.25H9.92zm5.66 0h4.16q0-.62-.04-1.09c-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3q-.47-.03-1.09-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridRegular.displayName = 'GridRegular';

// Triple export pattern (lucide-react style)
export { GridRegular, GridRegular as GridRegularIcon, GridRegular as SiGridRegular };
export default GridRegular;
export type { GridRegularProps };
