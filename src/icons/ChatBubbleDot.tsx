import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleDotRegular } from './ChatBubbleDotRegular.js';
import { ChatBubbleDotRegularDuotone } from './ChatBubbleDotRegularDuotone.js';
import { ChatBubbleDotBold } from './ChatBubbleDotBold.js';
import { ChatBubbleDotBoldDuotone } from './ChatBubbleDotBoldDuotone.js';
import { ChatBubbleDotFill } from './ChatBubbleDotFill.js';
import { ChatBubbleDotFillDuotone } from './ChatBubbleDotFillDuotone.js';

export interface ChatBubbleDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleDotRegular } from 'stera-icons/icons/ChatBubbleDotRegular';
 */
const ChatBubbleDot = memo(forwardRef<SVGSVGElement, ChatBubbleDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleDotFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleDotRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleDotRegular ref={ref} {...rest} />;
}));

ChatBubbleDot.displayName = 'ChatBubbleDot';

// Triple export pattern (lucide-react style)
export { ChatBubbleDot, ChatBubbleDot as ChatBubbleDotIcon, ChatBubbleDot as SiChatBubbleDot };
export default ChatBubbleDot;
