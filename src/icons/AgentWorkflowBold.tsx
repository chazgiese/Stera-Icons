import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowBoldProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowBold = memo(
  forwardRef<SVGSVGElement, AgentWorkflowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow-bold" {...props}>
      <path d="M7 11a1 1 0 1 1 0 2 2 2 0 0 0-2 2v.25c0 1.24 1 2.25 2.25 2.25h10.34l-.8-.8a1 1 0 1 1 1.42-1.4l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.42-1.4l.8-.8H7.25A4.25 4.25 0 0 1 3 15.25V15a4 4 0 0 1 4-4" />
        <path d="M11.56 9.26a.47.47 0 0 1 .88 0 3.7 3.7 0 0 0 2.3 2.3c.41.14.41.74 0 .88a3.7 3.7 0 0 0-2.3 2.3.47.47 0 0 1-.88 0 3.7 3.7 0 0 0-2.3-2.3.47.47 0 0 1 0-.88 3.7 3.7 0 0 0 2.3-2.3" />
        <path fillRule="evenodd" d="M6.5 2a3.5 3.5 0 0 1 3.35 2.5h6.9C19.1 4.5 21 6.4 21 8.75V9a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2v-.25c0-1.24-1-2.25-2.25-2.25h-6.9A3.5 3.5 0 1 1 6.5 2m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentWorkflowBold.displayName = 'AgentWorkflowBold';

// Triple export pattern (lucide-react style)
export { AgentWorkflowBold, AgentWorkflowBold as AgentWorkflowBoldIcon, AgentWorkflowBold as SiAgentWorkflowBold };
export default AgentWorkflowBold;
export type { AgentWorkflowBoldProps };
