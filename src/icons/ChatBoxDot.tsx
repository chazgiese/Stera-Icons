import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxDotRegular } from './ChatBoxDotRegular.js';
import { ChatBoxDotRegularDuotone } from './ChatBoxDotRegularDuotone.js';
import { ChatBoxDotBold } from './ChatBoxDotBold.js';
import { ChatBoxDotBoldDuotone } from './ChatBoxDotBoldDuotone.js';
import { ChatBoxDotFill } from './ChatBoxDotFill.js';
import { ChatBoxDotFillDuotone } from './ChatBoxDotFillDuotone.js';

export interface ChatBoxDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxDotRegular } from 'stera-icons/icons/ChatBoxDotRegular';
 */
const ChatBoxDot = memo(forwardRef<SVGSVGElement, ChatBoxDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxDotFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxDotRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxDotRegular ref={ref} {...rest} />;
}));

ChatBoxDot.displayName = 'ChatBoxDot';

// Triple export pattern (lucide-react style)
export { ChatBoxDot, ChatBoxDot as ChatBoxDotIcon, ChatBoxDot as SiChatBoxDot };
export default ChatBoxDot;
