import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatMessagesRegular } from './ChatMessagesRegular';
import { ChatMessagesRegularDuotone } from './ChatMessagesRegularDuotone';
import { ChatMessagesBold } from './ChatMessagesBold';
import { ChatMessagesBoldDuotone } from './ChatMessagesBoldDuotone';
import { ChatMessagesFill } from './ChatMessagesFill';
import { ChatMessagesFillDuotone } from './ChatMessagesFillDuotone';

export interface ChatMessagesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatMessages - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatMessagesRegular } from 'stera-icons/ChatMessagesRegular';
 */
const ChatMessages = memo(forwardRef<SVGSVGElement, ChatMessagesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatMessagesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatMessagesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatMessagesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatMessagesFill ref={ref} {...rest} />;
  if (duotone) return <ChatMessagesRegularDuotone ref={ref} {...rest} />;
  return <ChatMessagesRegular ref={ref} {...rest} />;
}));

ChatMessages.displayName = 'ChatMessages';

// Triple export pattern (lucide-react style)
export { ChatMessages, ChatMessages as ChatMessagesIcon, ChatMessages as SiChatMessages };
