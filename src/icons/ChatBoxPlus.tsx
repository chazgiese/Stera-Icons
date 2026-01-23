import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxPlusRegular } from './ChatBoxPlusRegular.js';
import { ChatBoxPlusRegularDuotone } from './ChatBoxPlusRegularDuotone.js';
import { ChatBoxPlusBold } from './ChatBoxPlusBold.js';
import { ChatBoxPlusBoldDuotone } from './ChatBoxPlusBoldDuotone.js';
import { ChatBoxPlusFill } from './ChatBoxPlusFill.js';
import { ChatBoxPlusFillDuotone } from './ChatBoxPlusFillDuotone.js';

export interface ChatBoxPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxPlusRegular } from 'stera-icons/icons/ChatBoxPlusRegular';
 */
const ChatBoxPlus = memo(forwardRef<SVGSVGElement, ChatBoxPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxPlusFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxPlusRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxPlusRegular ref={ref} {...rest} />;
}));

ChatBoxPlus.displayName = 'ChatBoxPlus';

// Triple export pattern (lucide-react style)
export { ChatBoxPlus, ChatBoxPlus as ChatBoxPlusIcon, ChatBoxPlus as SiChatBoxPlus };
export default ChatBoxPlus;
