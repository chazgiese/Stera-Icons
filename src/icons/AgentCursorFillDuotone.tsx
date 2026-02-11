import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-cursor-fill-duotone" {...props}>
      <path d="M19 10.79v-.39c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5h-3.2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h.38a1 1 0 0 1 0 2h-.38q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3h3.2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.39a1 1 0 0 1-2 0" opacity={.4} />
        <path d="M11.13 13.11A1.57 1.57 0 0 1 13 11.1l.11.04 7.82 2.6a1.57 1.57 0 0 1-.06 3l-3.2.94-.94 3.2a1.57 1.57 0 0 1-3 .06zM8.35 14.32a1 1 0 0 1 1.42 1.42L8.7 16.79a1 1 0 0 1-1.41-1.41zM6.03 10.44a1 1 0 0 1 1.23-.71l1.44.39a1 1 0 1 1-.52 1.93l-1.44-.39a1 1 0 0 1-.7-1.22M15.38 7.3a1 1 0 0 1 1.41 1.41l-1.05 1.06a1 1 0 1 1-1.42-1.42zM10.43 6.03a1 1 0 0 1 1.23.71l.39 1.44a1 1 0 0 1-1.94.52l-.38-1.44a1 1 0 0 1 .7-1.23" />
    </IconBase>
  ))
);

AgentCursorFillDuotone.displayName = 'AgentCursorFillDuotone';

// Triple export pattern (lucide-react style)
export { AgentCursorFillDuotone, AgentCursorFillDuotone as AgentCursorFillDuotoneIcon, AgentCursorFillDuotone as SiAgentCursorFillDuotone };
export default AgentCursorFillDuotone;
export type { AgentCursorFillDuotoneProps };
