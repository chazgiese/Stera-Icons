import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AgentCursorIcon as RegularAgentCursorIcon } from './agent-cursor';
import { AgentCursorIconBold } from './agent-cursor-bold';
import { AgentCursorIconFilled } from './agent-cursor-filled';
import { AgentCursorIconFilltone } from './agent-cursor-filltone';
import { AgentCursorIconLinetone } from './agent-cursor-linetone';

export interface AgentCursorIconProps extends IconProps {
  variant?: IconVariant;
}

const AgentCursorIcon = memo(forwardRef<SVGSVGElement, AgentCursorIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AgentCursorIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AgentCursorIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AgentCursorIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AgentCursorIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAgentCursorIcon ref={ref} {...props} />;
  }
}));

AgentCursorIcon.displayName = 'AgentCursorIcon';

export { AgentCursorIcon };
