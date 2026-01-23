import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleAlertRegular } from './ChatBubbleAlertRegular.js';
import { ChatBubbleAlertRegularDuotone } from './ChatBubbleAlertRegularDuotone.js';
import { ChatBubbleAlertBold } from './ChatBubbleAlertBold.js';
import { ChatBubbleAlertBoldDuotone } from './ChatBubbleAlertBoldDuotone.js';
import { ChatBubbleAlertFill } from './ChatBubbleAlertFill.js';
import { ChatBubbleAlertFillDuotone } from './ChatBubbleAlertFillDuotone.js';

export interface ChatBubbleAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleAlertRegular } from 'stera-icons/icons/ChatBubbleAlertRegular';
 */
const ChatBubbleAlert = memo(forwardRef<SVGSVGElement, ChatBubbleAlertProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleAlertBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleAlertBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleAlertFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleAlertFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleAlertRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleAlertRegular ref={ref} {...rest} />;
}));

ChatBubbleAlert.displayName = 'ChatBubbleAlert';

// Triple export pattern (lucide-react style)
export { ChatBubbleAlert, ChatBubbleAlert as ChatBubbleAlertIcon, ChatBubbleAlert as SiChatBubbleAlert };
export default ChatBubbleAlert;
