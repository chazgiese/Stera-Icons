import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldProps = Omit<IconBaseProps, 'children'>;

const GridBold = memo(
  forwardRef<SVGSVGElement, GridBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-bold" {...props}>
      <path fillRule="evenodd" d="M14.64 3h.05q1.24-.01 2.09.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.85.05 2.09v5.38q.01 1.24-.05 2.09a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.85.06-2.09.05H9.31q-1.24.01-2.09-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q3 15.93 3 14.69V9.31Q3 8.07 3.05 7.22a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44A28 28 0 0 1 9.31 3h5.33m-4.3 16h3.33v-3.33h-3.34zM5 15.67l.04.95c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23q.4.03.95.03v-3.32zm10.67 3.32q.55 0 .95-.03c.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01q.03-.4.03-.95h-3.32zm0-5.32H19v-3.34h-3.33zm-5.34 0h3.34v-3.34h-3.34zm-5.33 0h3.33v-3.34H5zM8.33 5l-.95.04c-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01L5 8.33h3.33zm2 3.33h3.34V5h-3.34zm5.34 0h3.32q0-.55-.03-.95c-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23L15.67 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBold.displayName = 'GridBold';

// Triple export pattern (lucide-react style)
export { GridBold, GridBold as GridBoldIcon, GridBold as SiGridBold };
export default GridBold;
export type { GridBoldProps };
