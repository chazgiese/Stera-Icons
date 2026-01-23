import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxRegular } from './ChatBoxRegular.js';
import { ChatBoxRegularDuotone } from './ChatBoxRegularDuotone.js';
import { ChatBoxBold } from './ChatBoxBold.js';
import { ChatBoxBoldDuotone } from './ChatBoxBoldDuotone.js';
import { ChatBoxFill } from './ChatBoxFill.js';
import { ChatBoxFillDuotone } from './ChatBoxFillDuotone.js';

export interface ChatBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxRegular } from 'stera-icons/icons/ChatBoxRegular';
 */
const ChatBox = memo(forwardRef<SVGSVGElement, ChatBoxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxRegular ref={ref} {...rest} />;
}));

ChatBox.displayName = 'ChatBox';

// Triple export pattern (lucide-react style)
export { ChatBox, ChatBox as ChatBoxIcon, ChatBox as SiChatBox };
export default ChatBox;
