import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorBoldProps = Omit<IconBaseProps, 'children'>;

const AgentCursorBold = memo(
  forwardRef<SVGSVGElement, AgentCursorBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-cursor-bold" {...props}>
      <path fillRule="evenodd" d="M11.13 13.11A1.57 1.57 0 0 1 13 11.1l.11.04 7.82 2.6a1.57 1.57 0 0 1-.06 3l-3.2.94-.94 3.2a1.57 1.57 0 0 1-3 .06zM15.19 19l.71-2.4a1 1 0 0 1 .68-.69l2.41-.7-5.7-1.9z" clipRule="evenodd" />
        <path d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.81a1 1 0 0 1-2 0V9.9c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h.8a1 1 0 0 1 0 2h-.8q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06z" />
        <path d="M8.35 14.32a1 1 0 0 1 1.42 1.42L8.7 16.79a1 1 0 0 1-1.41-1.41zM6.03 10.44a1 1 0 0 1 1.23-.71l1.44.39a1 1 0 0 1-.52 1.93l-1.44-.39a1 1 0 0 1-.7-1.22M15.38 7.3a1 1 0 0 1 1.41 1.41l-1.05 1.06a1 1 0 0 1-1.42-1.42zM10.43 6.03a1 1 0 0 1 1.23.71l.39 1.44a1 1 0 0 1-1.94.52l-.38-1.44a1 1 0 0 1 .7-1.23" />
    </IconBase>
  ))
);

AgentCursorBold.displayName = 'AgentCursorBold';

// Triple export pattern (lucide-react style)
export { AgentCursorBold, AgentCursorBold as AgentCursorBoldIcon, AgentCursorBold as SiAgentCursorBold };
export default AgentCursorBold;
export type { AgentCursorBoldProps };
