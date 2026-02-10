import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridRegularProps = Omit<IconBaseProps, 'children'>;

const GridRegular = memo(
  forwardRef<SVGSVGElement, GridRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.64 3.25h.05q1.24-.01 2.07.05.93.06 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.83.05 2.07v5.38q.01 1.24-.05 2.07a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.83.06-2.07.05H9.31q-1.24.01-2.07-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.83-.05-2.07V9.31q-.01-1.24.05-2.07.06-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41a27 27 0 0 1 2.07-.05h5.33m-4.56 16h3.84v-3.83h-3.84zm-5.33-3.83q0 .71.04 1.22c.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26l1.22.04v-3.83zm10.67 3.83q.71 0 1.22-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11l.04-1.22h-3.83zm0-5.33h3.83v-3.84h-3.83zm-5.34 0h3.84v-3.84h-3.84zm-5.33 0h3.83v-3.84H4.75zm3.83-9.17q-.71 0-1.22.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11l-.04 1.22h3.83zm1.5 3.83h3.84V4.75h-3.84zm5.34 0h3.83q0-.71-.04-1.22a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26l-1.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridRegular.displayName = 'GridRegular';

// Triple export pattern (lucide-react style)
export { GridRegular, GridRegular as GridRegularIcon, GridRegular as SiGridRegular };
export default GridRegular;
export type { GridRegularProps };
