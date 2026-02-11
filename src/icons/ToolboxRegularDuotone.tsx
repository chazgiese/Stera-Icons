import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-duotone" {...props}>
      <path d="M15.25 12.25v1.5h-6.5v-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 6.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-3.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.45h3.5v1.5h-3.5v1.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-1.45h-3.5v-1.5h3.5v-.45c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={0.4} />
        <path d="M8 10.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M16 10.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M14.42 2.75a2 2 0 0 1 1.98 1.72l.25 1.78h-1.51l-.23-1.57a.5.5 0 0 0-.5-.43H9.59a.5.5 0 0 0-.5.43l-.22 1.57H7.35l.25-1.78a2 2 0 0 1 1.98-1.72z" />
    </IconBase>
  ))
);

ToolboxRegularDuotone.displayName = 'ToolboxRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxRegularDuotone, ToolboxRegularDuotone as ToolboxRegularDuotoneIcon, ToolboxRegularDuotone as SiToolboxRegularDuotone };
export default ToolboxRegularDuotone;
export type { ToolboxRegularDuotoneProps };
