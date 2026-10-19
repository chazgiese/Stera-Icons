import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridBoldDuotone = memo(
  forwardRef<SVGSVGElement, GridBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 4v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4H8v-4H4v-2h4v-4H4V8h4V4h2m0 10h4v-4h-4z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v5.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2zM9.4 4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C4 7.47 4 8.26 4 9.4v5.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h5.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C16.53 4 15.74 4 14.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBoldDuotone.displayName = 'GridBoldDuotone';

// Triple export pattern
export { GridBoldDuotone, GridBoldDuotone as GridBoldDuotoneIcon, GridBoldDuotone as SiGridBoldDuotone };
export default GridBoldDuotone;
export type { GridBoldDuotoneProps };
