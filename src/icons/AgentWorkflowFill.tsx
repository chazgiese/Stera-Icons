import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowFillProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowFill = memo(
  forwardRef<SVGSVGElement, AgentWorkflowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow-fill" {...props}>
      <path d="M7 11a1 1 0 1 1 0 2 2 2 0 0 0-2 2v.25c0 1.24 1 2.25 2.25 2.25h9.25V16a1 1 0 0 1 1.7-.7l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 0 1-1.7-.7v-1.5H7.25A4.25 4.25 0 0 1 3 15.25V15a4 4 0 0 1 4-4" />
        <path d="M11.56 9.26a.47.47 0 0 1 .88 0 3.7 3.7 0 0 0 2.3 2.3c.41.14.41.74 0 .88a3.7 3.7 0 0 0-2.3 2.3.47.47 0 0 1-.88 0 3.7 3.7 0 0 0-2.3-2.3.47.47 0 0 1 0-.88 3.7 3.7 0 0 0 2.3-2.3" />
        <path d="M6.5 2.25c1.45 0 2.67.94 3.1 2.25h7.15C19.1 4.5 21 6.4 21 8.75V9a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2v-.25c0-1.24-1-2.25-2.25-2.25H9.59A3.25 3.25 0 1 1 6.5 2.25" />
    </IconBase>
  ))
);

AgentWorkflowFill.displayName = 'AgentWorkflowFill';

// Triple export pattern (lucide-react style)
export { AgentWorkflowFill, AgentWorkflowFill as AgentWorkflowFillIcon, AgentWorkflowFill as SiAgentWorkflowFill };
export default AgentWorkflowFill;
export type { AgentWorkflowFillProps };
