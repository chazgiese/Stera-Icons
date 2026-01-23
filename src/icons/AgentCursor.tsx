import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentCursorRegular } from './AgentCursorRegular.js';
import { AgentCursorRegularDuotone } from './AgentCursorRegularDuotone.js';
import { AgentCursorBold } from './AgentCursorBold.js';
import { AgentCursorBoldDuotone } from './AgentCursorBoldDuotone.js';
import { AgentCursorFill } from './AgentCursorFill.js';
import { AgentCursorFillDuotone } from './AgentCursorFillDuotone.js';

export interface AgentCursorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentCursor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentCursorRegular } from 'stera-icons/icons/AgentCursorRegular';
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
export default AgentCursor;
