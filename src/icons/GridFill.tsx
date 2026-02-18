import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridFillProps = Omit<IconBaseProps, 'children'>;

const GridFill = memo(
  forwardRef<SVGSVGElement, GridFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-fill" {...props}>
      <path d="M14.54 21.38H9.46v-5.09h5.08zM7.7 21.37q-.99.01-1.68-.04a4 4 0 0 1-1.42-.35 3.6 3.6 0 0 1-1.58-1.58 4 4 0 0 1-.35-1.42q-.05-.69-.04-1.69H7.7zM21.37 16.3q.01.99-.04 1.68a4 4 0 0 1-.35 1.42q-.54 1.04-1.58 1.58c-.44.22-.91.31-1.42.36q-.69.04-1.69.03V16.3zM7.7 14.54H2.64V9.46H7.7zM14.54 14.54H9.46V9.46h5.08zM21.38 9.46v5.08h-5.09V9.46zM7.7 7.7H2.64q-.01-.99.04-1.68c.04-.51.13-.98.35-1.42q.54-1.04 1.58-1.58c.44-.22.91-.31 1.42-.35q.69-.05 1.69-.04zM14.54 7.7H9.46V2.64h5.08zM16.3 2.63q.99-.01 1.68.04c.51.04.98.13 1.42.35q1.04.54 1.58 1.58c.22.44.31.91.36 1.42q.04.69.03 1.69H16.3z" />
    </IconBase>
  ))
);

GridFill.displayName = 'GridFill';

// Triple export pattern (lucide-react style)
export { GridFill, GridFill as GridFillIcon, GridFill as SiGridFill };
export default GridFill;
export type { GridFillProps };
