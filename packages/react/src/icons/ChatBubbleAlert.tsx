import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleAlertRegular } from './ChatBubbleAlertRegular';
import { ChatBubbleAlertRegularDuotone } from './ChatBubbleAlertRegularDuotone';
import { ChatBubbleAlertBold } from './ChatBubbleAlertBold';
import { ChatBubbleAlertBoldDuotone } from './ChatBubbleAlertBoldDuotone';
import { ChatBubbleAlertFill } from './ChatBubbleAlertFill';
import { ChatBubbleAlertFillDuotone } from './ChatBubbleAlertFillDuotone';

export interface ChatBubbleAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleAlertRegular } from 'stera-icons/ChatBubbleAlertRegular';
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
