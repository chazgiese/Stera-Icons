import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleOffRegular } from './ChatBubbleOffRegular.js';
import { ChatBubbleOffRegularDuotone } from './ChatBubbleOffRegularDuotone.js';
import { ChatBubbleOffBold } from './ChatBubbleOffBold.js';
import { ChatBubbleOffBoldDuotone } from './ChatBubbleOffBoldDuotone.js';
import { ChatBubbleOffFill } from './ChatBubbleOffFill.js';
import { ChatBubbleOffFillDuotone } from './ChatBubbleOffFillDuotone.js';

export interface ChatBubbleOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleOffRegular } from 'stera-icons/icons/ChatBubbleOffRegular';
 */
const ChatBubbleOff = memo(forwardRef<SVGSVGElement, ChatBubbleOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleOffFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleOffRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleOffRegular ref={ref} {...rest} />;
}));

ChatBubbleOff.displayName = 'ChatBubbleOff';

// Triple export pattern (lucide-react style)
export { ChatBubbleOff, ChatBubbleOff as ChatBubbleOffIcon, ChatBubbleOff as SiChatBubbleOff };
export default ChatBubbleOff;
