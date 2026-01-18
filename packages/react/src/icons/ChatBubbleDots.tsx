import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDotsRegular } from './ChatBubbleDotsRegular';
import { ChatBubbleDotsRegularDuotone } from './ChatBubbleDotsRegularDuotone';
import { ChatBubbleDotsBold } from './ChatBubbleDotsBold';
import { ChatBubbleDotsBoldDuotone } from './ChatBubbleDotsBoldDuotone';
import { ChatBubbleDotsFill } from './ChatBubbleDotsFill';
import { ChatBubbleDotsFillDuotone } from './ChatBubbleDotsFillDuotone';

export interface ChatBubbleDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleDotsRegular } from 'stera-icons/ChatBubbleDotsRegular';
 */
const ChatBubbleDots = memo(forwardRef<SVGSVGElement, ChatBubbleDotsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleDotsFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleDotsRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleDotsRegular ref={ref} {...rest} />;
}));

ChatBubbleDots.displayName = 'ChatBubbleDots';

// Triple export pattern (lucide-react style)
export { ChatBubbleDots, ChatBubbleDots as ChatBubbleDotsIcon, ChatBubbleDots as SiChatBubbleDots };
