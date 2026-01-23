import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxAlertRegular } from './ChatBoxAlertRegular.js';
import { ChatBoxAlertRegularDuotone } from './ChatBoxAlertRegularDuotone.js';
import { ChatBoxAlertBold } from './ChatBoxAlertBold.js';
import { ChatBoxAlertBoldDuotone } from './ChatBoxAlertBoldDuotone.js';
import { ChatBoxAlertFill } from './ChatBoxAlertFill.js';
import { ChatBoxAlertFillDuotone } from './ChatBoxAlertFillDuotone.js';

export interface ChatBoxAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxAlertRegular } from 'stera-icons/icons/ChatBoxAlertRegular';
 */
const ChatBoxAlert = memo(forwardRef<SVGSVGElement, ChatBoxAlertProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxAlertBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxAlertBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxAlertFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxAlertFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxAlertRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxAlertRegular ref={ref} {...rest} />;
}));

ChatBoxAlert.displayName = 'ChatBoxAlert';

// Triple export pattern (lucide-react style)
export { ChatBoxAlert, ChatBoxAlert as ChatBoxAlertIcon, ChatBoxAlert as SiChatBoxAlert };
export default ChatBoxAlert;
