import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxOffRegular } from './ChatBoxOffRegular.js';
import { ChatBoxOffRegularDuotone } from './ChatBoxOffRegularDuotone.js';
import { ChatBoxOffBold } from './ChatBoxOffBold.js';
import { ChatBoxOffBoldDuotone } from './ChatBoxOffBoldDuotone.js';
import { ChatBoxOffFill } from './ChatBoxOffFill.js';
import { ChatBoxOffFillDuotone } from './ChatBoxOffFillDuotone.js';

export interface ChatBoxOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxOffRegular } from 'stera-icons/icons/ChatBoxOffRegular';
 */
const ChatBoxOff = memo(forwardRef<SVGSVGElement, ChatBoxOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxOffFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxOffRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxOffRegular ref={ref} {...rest} />;
}));

ChatBoxOff.displayName = 'ChatBoxOff';

// Triple export pattern (lucide-react style)
export { ChatBoxOff, ChatBoxOff as ChatBoxOffIcon, ChatBoxOff as SiChatBoxOff };
export default ChatBoxOff;
