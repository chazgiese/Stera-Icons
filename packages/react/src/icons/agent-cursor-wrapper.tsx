import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AgentCursorIcon as RegularAgentCursorIcon } from './agent-cursor';
import { AgentCursorIconDuotone as AgentCursorIconDuotone } from './agent-cursor-duotone';
import { AgentCursorIconBold as AgentCursorIconBold } from './agent-cursor-bold';
import { AgentCursorIconBoldDuotone as AgentCursorIconBoldDuotone } from './agent-cursor-bold-duotone';
import { AgentCursorIconFill as AgentCursorIconFill } from './agent-cursor-fill';
import { AgentCursorIconFillDuotone as AgentCursorIconFillDuotone } from './agent-cursor-fill-duotone';

export interface AgentCursorIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AgentCursorIcon = memo(forwardRef<SVGSVGElement, AgentCursorIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentCursorIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AgentCursorIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AgentCursorIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AgentCursorIconFill ref={ref} {...props} />;
  if (duotone) return <AgentCursorIconDuotone ref={ref} {...props} />;
  return <RegularAgentCursorIcon ref={ref} {...props} />;
}));

AgentCursorIcon.displayName = 'AgentCursorIcon';

export { AgentCursorIcon };
