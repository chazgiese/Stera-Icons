import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleDashedRegular } from './ChatBubbleDashedRegular.js';
import { ChatBubbleDashedRegularDuotone } from './ChatBubbleDashedRegularDuotone.js';
import { ChatBubbleDashedBold } from './ChatBubbleDashedBold.js';
import { ChatBubbleDashedBoldDuotone } from './ChatBubbleDashedBoldDuotone.js';
import { ChatBubbleDashedFill } from './ChatBubbleDashedFill.js';
import { ChatBubbleDashedFillDuotone } from './ChatBubbleDashedFillDuotone.js';

export interface ChatBubbleDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleDashedRegular } from 'stera-icons/icons/ChatBubbleDashedRegular';
 */
const ChatBubbleDashed = memo(forwardRef<SVGSVGElement, ChatBubbleDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleDashedFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleDashedRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleDashedRegular ref={ref} {...rest} />;
}));

ChatBubbleDashed.displayName = 'ChatBubbleDashed';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashed, ChatBubbleDashed as ChatBubbleDashedIcon, ChatBubbleDashed as SiChatBubbleDashed };
export default ChatBubbleDashed;
