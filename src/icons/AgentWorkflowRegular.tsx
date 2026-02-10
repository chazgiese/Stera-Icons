import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowRegularProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowRegular = memo(
  forwardRef<SVGSVGElement, AgentWorkflowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow" {...props}>
      <path fill="currentColor" d="M7 11.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25v.25a2.5 2.5 0 0 0 2.5 2.5h10.94l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H7.25a4 4 0 0 1-4-4V15A3.75 3.75 0 0 1 7 11.25" />
        <path fill="currentColor" d="M11.56 9.26a.47.47 0 0 1 .88 0 3.7 3.7 0 0 0 2.3 2.3c.41.14.41.74 0 .88a3.7 3.7 0 0 0-2.3 2.3.47.47 0 0 1-.88 0 3.7 3.7 0 0 0-2.3-2.3.47.47 0 0 1 0-.88 3.7 3.7 0 0 0 2.3-2.3" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2.25a3.25 3.25 0 0 1 3.16 2.5h7.09a4 4 0 0 1 4 4V9A3.75 3.75 0 0 1 17 12.75a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25v-.25a2.5 2.5 0 0 0-2.5-2.5H9.66a3.25 3.25 0 1 1-3.16-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentWorkflowRegular.displayName = 'AgentWorkflowRegular';

// Triple export pattern (lucide-react style)
export { AgentWorkflowRegular, AgentWorkflowRegular as AgentWorkflowRegularIcon, AgentWorkflowRegular as SiAgentWorkflowRegular };
export default AgentWorkflowRegular;
export type { AgentWorkflowRegularProps };
