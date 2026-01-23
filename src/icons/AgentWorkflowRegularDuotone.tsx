import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentWorkflowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow-duotone" {...props}>
      <path d="M6 11.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25v.25a2.5 2.5 0 0 0 2.5 2.5h12.94l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6.25a4 4 0 0 1-4-4V15A3.75 3.75 0 0 1 6 11.25" opacity={0.4} />
        <path fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 3.16 2.5h9.09a4 4 0 0 1 4 4V9A3.75 3.75 0 0 1 18 12.75a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25v-.25a2.5 2.5 0 0 0-2.5-2.5H8.66a3.25 3.25 0 1 1-3.16-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M11.53 8.35a.5.5 0 0 1 .94 0l.19.53a4 4 0 0 0 2.46 2.46l.53.19a.5.5 0 0 1 0 .94l-.53.19a4 4 0 0 0-2.46 2.46l-.19.53a.5.5 0 0 1-.94 0l-.19-.53a4 4 0 0 0-2.46-2.46l-.53-.19a.5.5 0 0 1 0-.94l.53-.19a4 4 0 0 0 2.46-2.46z" />
    </IconBase>
  ))
);

AgentWorkflowRegularDuotone.displayName = 'AgentWorkflowRegularDuotone';

// Triple export pattern (lucide-react style)
export { AgentWorkflowRegularDuotone, AgentWorkflowRegularDuotone as AgentWorkflowRegularDuotoneIcon, AgentWorkflowRegularDuotone as SiAgentWorkflowRegularDuotone };
export default AgentWorkflowRegularDuotone;
export type { AgentWorkflowRegularDuotoneProps };
