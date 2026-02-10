import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxBoldProps = Omit<IconBaseProps, 'children'>;

const ToolboxBold = memo(
  forwardRef<SVGSVGElement, ToolboxBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6q.8 0 1.38.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 16.43 2 15.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.35 6 7.13 6l.23-1.57A2.25 2.25 0 0 1 9.58 2.5zM17 14v.5a1 1 0 1 1-2 0V14H9v.5a1 1 0 1 1-2 0V14H4v1.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V14zM7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 11.8v.2h3v-.5a1 1 0 1 1 2 0v.5h6v-.5a1 1 0 1 1 2 0v.5h3v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 8 17.06 8 16.2 8zm1.78-3.5c-.12 0-.23.1-.24.21L9.15 6h5.7l-.19-1.29a.25.25 0 0 0-.24-.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxBold.displayName = 'ToolboxBold';

// Triple export pattern (lucide-react style)
export { ToolboxBold, ToolboxBold as ToolboxBoldIcon, ToolboxBold as SiToolboxBold };
export default ToolboxBold;
export type { ToolboxBoldProps };
