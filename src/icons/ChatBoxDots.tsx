import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxDotsRegular } from './ChatBoxDotsRegular.js';
import { ChatBoxDotsRegularDuotone } from './ChatBoxDotsRegularDuotone.js';
import { ChatBoxDotsBold } from './ChatBoxDotsBold.js';
import { ChatBoxDotsBoldDuotone } from './ChatBoxDotsBoldDuotone.js';
import { ChatBoxDotsFill } from './ChatBoxDotsFill.js';
import { ChatBoxDotsFillDuotone } from './ChatBoxDotsFillDuotone.js';

export interface ChatBoxDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxDotsRegular } from 'stera-icons/icons/ChatBoxDotsRegular';
 */
const ChatBoxDots = memo(forwardRef<SVGSVGElement, ChatBoxDotsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxDotsFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxDotsRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxDotsRegular ref={ref} {...rest} />;
}));

ChatBoxDots.displayName = 'ChatBoxDots';

// Triple export pattern (lucide-react style)
export { ChatBoxDots, ChatBoxDots as ChatBoxDotsIcon, ChatBoxDots as SiChatBoxDots };
export default ChatBoxDots;
