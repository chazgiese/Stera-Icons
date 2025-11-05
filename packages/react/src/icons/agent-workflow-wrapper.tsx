import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AgentWorkflowIcon as RegularAgentWorkflowIcon } from './agent-workflow';
import { AgentWorkflowIconBold } from './agent-workflow-bold';
import { AgentWorkflowIconFilled } from './agent-workflow-filled';
import { AgentWorkflowIconFilltone } from './agent-workflow-filltone';
import { AgentWorkflowIconLinetone } from './agent-workflow-linetone';

export interface AgentWorkflowIconProps extends IconProps {
  variant?: IconVariant;
}

const AgentWorkflowIcon = memo(forwardRef<SVGSVGElement, AgentWorkflowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AgentWorkflowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AgentWorkflowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AgentWorkflowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AgentWorkflowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAgentWorkflowIcon ref={ref} {...props} />;
  }
}));

AgentWorkflowIcon.displayName = 'AgentWorkflowIcon';

export { AgentWorkflowIcon };
