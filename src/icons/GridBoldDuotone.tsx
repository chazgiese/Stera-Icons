import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GridBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridBoldDuotone = memo(
  forwardRef<SVGSVGElement, GridBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 17.43 2 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 2 7.8 2zM7.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 4 17.06 4 16.2 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10 8h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4H8v-4H4v-2h4v-4H4V8h4V4h2zm0 6h4v-4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBoldDuotone.displayName = 'GridBoldDuotone';

// Triple export pattern (lucide-react style)
export { GridBoldDuotone, GridBoldDuotone as GridBoldDuotoneIcon, GridBoldDuotone as SiGridBoldDuotone };
export type { GridBoldDuotoneProps };
