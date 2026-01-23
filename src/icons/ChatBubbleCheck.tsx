import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleCheckRegular } from './ChatBubbleCheckRegular.js';
import { ChatBubbleCheckRegularDuotone } from './ChatBubbleCheckRegularDuotone.js';
import { ChatBubbleCheckBold } from './ChatBubbleCheckBold.js';
import { ChatBubbleCheckBoldDuotone } from './ChatBubbleCheckBoldDuotone.js';
import { ChatBubbleCheckFill } from './ChatBubbleCheckFill.js';
import { ChatBubbleCheckFillDuotone } from './ChatBubbleCheckFillDuotone.js';

export interface ChatBubbleCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleCheckRegular } from 'stera-icons/icons/ChatBubbleCheckRegular';
 */
const ChatBubbleCheck = memo(forwardRef<SVGSVGElement, ChatBubbleCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleCheckFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleCheckRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleCheckRegular ref={ref} {...rest} />;
}));

ChatBubbleCheck.displayName = 'ChatBubbleCheck';

// Triple export pattern (lucide-react style)
export { ChatBubbleCheck, ChatBubbleCheck as ChatBubbleCheckIcon, ChatBubbleCheck as SiChatBubbleCheck };
export default ChatBubbleCheck;
