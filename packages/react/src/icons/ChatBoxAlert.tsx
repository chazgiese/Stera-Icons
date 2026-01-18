import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxAlertRegular } from './ChatBoxAlertRegular';
import { ChatBoxAlertRegularDuotone } from './ChatBoxAlertRegularDuotone';
import { ChatBoxAlertBold } from './ChatBoxAlertBold';
import { ChatBoxAlertBoldDuotone } from './ChatBoxAlertBoldDuotone';
import { ChatBoxAlertFill } from './ChatBoxAlertFill';
import { ChatBoxAlertFillDuotone } from './ChatBoxAlertFillDuotone';

export interface ChatBoxAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxAlertRegular } from 'stera-icons/ChatBoxAlertRegular';
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
