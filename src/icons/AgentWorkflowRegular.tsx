import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AgentWorkflowRegularProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowRegular = memo(
  forwardRef<SVGSVGElement, AgentWorkflowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow" {...props}>
      <path fill="currentColor" d="M6 11.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25v.25a2.5 2.5 0 0 0 2.5 2.5h12.94l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6.25a4 4 0 0 1-4-4V15A3.75 3.75 0 0 1 6 11.25" />
        <path fill="currentColor" d="M11.53 8.35a.5.5 0 0 1 .94 0l.19.53a4 4 0 0 0 2.46 2.46l.53.19a.5.5 0 0 1 0 .94l-.53.19a4 4 0 0 0-2.46 2.46l-.19.53a.5.5 0 0 1-.94 0l-.19-.53a4 4 0 0 0-2.46-2.46l-.53-.19a.5.5 0 0 1 0-.94l.53-.19a4 4 0 0 0 2.46-2.46z" />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 3.16 2.5h9.09a4 4 0 0 1 4 4V9A3.75 3.75 0 0 1 18 12.75a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25v-.25a2.5 2.5 0 0 0-2.5-2.5H8.66a3.25 3.25 0 1 1-3.16-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentWorkflowRegular.displayName = 'AgentWorkflowRegular';

// Triple export pattern (lucide-react style)
export { AgentWorkflowRegular, AgentWorkflowRegular as AgentWorkflowRegularIcon, AgentWorkflowRegular as SiAgentWorkflowRegular };
export default AgentWorkflowRegular;
export type { AgentWorkflowRegularProps };
