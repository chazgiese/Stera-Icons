import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AgentCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-cursor-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37a1 1 0 1 1-2 0c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4h-2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06a1 1 0 1 1 0 2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2z" opacity={.4} />
        <path fill="currentColor" d="M11.13 13.11A1.57 1.57 0 0 1 13 11.1l.11.04 7.82 2.6a1.57 1.57 0 0 1-.06 3l-3.2.94-.94 3.2a1.57 1.57 0 0 1-3 .06zM8.35 14.32a1 1 0 0 1 1.42 1.42L8.7 16.79l-.07.07a1 1 0 0 1-1.41-1.4l.07-.08zM6.03 10.44a1 1 0 0 1 1.23-.71l1.44.39a1 1 0 1 1-.52 1.93l-1.44-.39a1 1 0 0 1-.7-1.22M15.38 7.3a1 1 0 0 1 1.41 1.41l-1.05 1.06a1 1 0 1 1-1.42-1.42zM10.43 6.03a1 1 0 0 1 1.23.71l.39 1.44a1 1 0 0 1-1.94.52l-.38-1.44a1 1 0 0 1 .7-1.23" />
    </IconBase>
  ))
);

AgentCursorFillDuotone.displayName = 'AgentCursorFillDuotone';

// Triple export pattern (lucide-react style)
export { AgentCursorFillDuotone, AgentCursorFillDuotone as AgentCursorFillDuotoneIcon, AgentCursorFillDuotone as SiAgentCursorFillDuotone };
export default AgentCursorFillDuotone;
export type { AgentCursorFillDuotoneProps };
