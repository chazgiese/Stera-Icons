import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AgentCursorRegular } from './AgentCursorRegular';
import { AgentCursorRegularDuotone } from './AgentCursorRegularDuotone';
import { AgentCursorBold } from './AgentCursorBold';
import { AgentCursorBoldDuotone } from './AgentCursorBoldDuotone';
import { AgentCursorFill } from './AgentCursorFill';
import { AgentCursorFillDuotone } from './AgentCursorFillDuotone';

export interface AgentCursorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentCursor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentCursorRegular } from 'stera-icons/AgentCursorRegular';
 */
const AgentCursor = memo(forwardRef<SVGSVGElement, AgentCursorProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentCursorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentCursorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentCursorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentCursorFill ref={ref} {...rest} />;
  if (duotone) return <AgentCursorRegularDuotone ref={ref} {...rest} />;
  return <AgentCursorRegular ref={ref} {...rest} />;
}));

AgentCursor.displayName = 'AgentCursor';

// Triple export pattern (lucide-react style)
export { AgentCursor, AgentCursor as AgentCursorIcon, AgentCursor as SiAgentCursor };
