import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentWorkflowRegular } from './AgentWorkflowRegular.js';
import { AgentWorkflowRegularDuotone } from './AgentWorkflowRegularDuotone.js';
import { AgentWorkflowBold } from './AgentWorkflowBold.js';
import { AgentWorkflowBoldDuotone } from './AgentWorkflowBoldDuotone.js';
import { AgentWorkflowFill } from './AgentWorkflowFill.js';
import { AgentWorkflowFillDuotone } from './AgentWorkflowFillDuotone.js';

export interface AgentWorkflowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentWorkflow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentWorkflowRegular } from 'stera-icons/icons/AgentWorkflowRegular';
 */
const AgentWorkflow = memo(forwardRef<SVGSVGElement, AgentWorkflowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentWorkflowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentWorkflowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentWorkflowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentWorkflowFill ref={ref} {...rest} />;
  if (duotone) return <AgentWorkflowRegularDuotone ref={ref} {...rest} />;
  return <AgentWorkflowRegular ref={ref} {...rest} />;
}));

AgentWorkflow.displayName = 'AgentWorkflow';

// Triple export pattern (lucide-react style)
export { AgentWorkflow, AgentWorkflow as AgentWorkflowIcon, AgentWorkflow as SiAgentWorkflow };
export default AgentWorkflow;
