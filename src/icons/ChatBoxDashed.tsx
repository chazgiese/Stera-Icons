import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBoxDashedRegular } from './ChatBoxDashedRegular.js';
import { ChatBoxDashedRegularDuotone } from './ChatBoxDashedRegularDuotone.js';
import { ChatBoxDashedBold } from './ChatBoxDashedBold.js';
import { ChatBoxDashedBoldDuotone } from './ChatBoxDashedBoldDuotone.js';
import { ChatBoxDashedFill } from './ChatBoxDashedFill.js';
import { ChatBoxDashedFillDuotone } from './ChatBoxDashedFillDuotone.js';

export interface ChatBoxDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxDashedRegular } from 'stera-icons/icons/ChatBoxDashedRegular';
 */
const ChatBoxDashed = memo(forwardRef<SVGSVGElement, ChatBoxDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxDashedFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxDashedRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxDashedRegular ref={ref} {...rest} />;
}));

ChatBoxDashed.displayName = 'ChatBoxDashed';

// Triple export pattern (lucide-react style)
export { ChatBoxDashed, ChatBoxDashed as ChatBoxDashedIcon, ChatBoxDashed as SiChatBoxDashed };
export default ChatBoxDashed;
