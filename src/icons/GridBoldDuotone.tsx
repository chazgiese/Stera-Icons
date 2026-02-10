import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridBoldDuotone = memo(
  forwardRef<SVGSVGElement, GridBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.33 5v3.33h3.34V5h2v3.33h3.32L19 9.6v.73h-3.33v3.34H19v2h-3.33v3.32L14.4 19h-.73v-3.33h-3.34V19h-2v-3.33H5.01L5 14.4v-.73h3.33v-3.34H5v-2h3.33V5h2m0 8.67h3.34v-3.34h-3.34z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.4 3q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v4.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H9.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q3 15.84 3 14.4V9.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q8.16 3 9.6 3zM9.6 5c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C5 7.92 5 8.6 5 9.6v4.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h4.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V9.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C16.08 5 15.4 5 14.4 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBoldDuotone.displayName = 'GridBoldDuotone';

// Triple export pattern (lucide-react style)
export { GridBoldDuotone, GridBoldDuotone as GridBoldDuotoneIcon, GridBoldDuotone as SiGridBoldDuotone };
export default GridBoldDuotone;
export type { GridBoldDuotoneProps };
