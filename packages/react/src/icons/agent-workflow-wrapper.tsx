import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AgentWorkflowIcon as RegularAgentWorkflowIcon } from './agent-workflow';
import { AgentWorkflowIconDuotone as AgentWorkflowIconDuotone } from './agent-workflow-duotone';
import { AgentWorkflowIconBold as AgentWorkflowIconBold } from './agent-workflow-bold';
import { AgentWorkflowIconBoldDuotone as AgentWorkflowIconBoldDuotone } from './agent-workflow-bold-duotone';
import { AgentWorkflowIconFill as AgentWorkflowIconFill } from './agent-workflow-fill';
import { AgentWorkflowIconFillDuotone as AgentWorkflowIconFillDuotone } from './agent-workflow-fill-duotone';

export interface AgentWorkflowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AgentWorkflowIcon = memo(forwardRef<SVGSVGElement, AgentWorkflowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentWorkflowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AgentWorkflowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AgentWorkflowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AgentWorkflowIconFill ref={ref} {...props} />;
  if (duotone) return <AgentWorkflowIconDuotone ref={ref} {...props} />;
  return <RegularAgentWorkflowIcon ref={ref} {...props} />;
}));

AgentWorkflowIcon.displayName = 'AgentWorkflowIcon';

export { AgentWorkflowIcon };
