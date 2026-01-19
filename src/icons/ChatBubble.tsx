import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleRegular } from './ChatBubbleRegular';
import { ChatBubbleRegularDuotone } from './ChatBubbleRegularDuotone';
import { ChatBubbleBold } from './ChatBubbleBold';
import { ChatBubbleBoldDuotone } from './ChatBubbleBoldDuotone';
import { ChatBubbleFill } from './ChatBubbleFill';
import { ChatBubbleFillDuotone } from './ChatBubbleFillDuotone';

export interface ChatBubbleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubble - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleRegular } from 'stera-icons/icons/ChatBubbleRegular';
 */
const ChatBubble = memo(forwardRef<SVGSVGElement, ChatBubbleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleRegular ref={ref} {...rest} />;
}));

ChatBubble.displayName = 'ChatBubble';

// Triple export pattern (lucide-react style)
export { ChatBubble, ChatBubble as ChatBubbleIcon, ChatBubble as SiChatBubble };
