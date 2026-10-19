import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridFillProps = Omit<IconBaseProps, 'children'>;

const GridFill = memo(
  forwardRef<SVGSVGElement, GridFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.63 21.75H9.37v-5.37h5.26zM7.63 21.75q-1.12.01-1.86-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.73-.04-1.86h5.38zM21.75 16.38q.01 1.1-.04 1.85c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.73.05-1.86.04v-5.37zM7.63 14.63H2.25V9.37h5.38zM14.63 14.63H9.37V9.37h5.26zM21.75 14.63h-5.37V9.37h5.37zM7.63 7.63H2.25q-.01-1.12.04-1.86c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.74-.05 1.86-.04zM14.63 7.63H9.37V2.25h5.26zM16.38 2.25q1.1-.01 1.85.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.74.04 1.86h-5.37z" />
    </IconBase>
  ))
);

GridFill.displayName = 'GridFill';

// Triple export pattern
export { GridFill, GridFill as GridFillIcon, GridFill as SiGridFill };
export default GridFill;
export type { GridFillProps };
