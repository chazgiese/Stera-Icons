import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-bold-duotone" {...props}>
      <path d="M15 12v2H9v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 16.43 2 15.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 6 7.8 6zM7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 11.8v.2h3v2H4v1.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V14h-3v-2h3v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 8 17.06 8 16.2 8z" clipRule="evenodd" opacity={0.4} />
        <path d="M8 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M16 10.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6h-2.02l-.19-1.29a.25.25 0 0 0-.24-.21H9.58c-.12 0-.23.1-.24.21L9.15 6H7.13l.23-1.57A2.25 2.25 0 0 1 9.58 2.5z" />
    </IconBase>
  ))
);

ToolboxBoldDuotone.displayName = 'ToolboxBoldDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxBoldDuotone, ToolboxBoldDuotone as ToolboxBoldDuotoneIcon, ToolboxBoldDuotone as SiToolboxBoldDuotone };
export default ToolboxBoldDuotone;
export type { ToolboxBoldDuotoneProps };
