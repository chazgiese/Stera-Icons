import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxTextRegular } from './ChatBoxTextRegular';
import { ChatBoxTextRegularDuotone } from './ChatBoxTextRegularDuotone';
import { ChatBoxTextBold } from './ChatBoxTextBold';
import { ChatBoxTextBoldDuotone } from './ChatBoxTextBoldDuotone';
import { ChatBoxTextFill } from './ChatBoxTextFill';
import { ChatBoxTextFillDuotone } from './ChatBoxTextFillDuotone';

export interface ChatBoxTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxTextRegular } from 'stera-icons/icons/ChatBoxTextRegular';
 */
const ChatBoxText = memo(forwardRef<SVGSVGElement, ChatBoxTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxTextFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxTextRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxTextRegular ref={ref} {...rest} />;
}));

ChatBoxText.displayName = 'ChatBoxText';

// Triple export pattern (lucide-react style)
export { ChatBoxText, ChatBoxText as ChatBoxTextIcon, ChatBoxText as SiChatBoxText };
export default ChatBoxText;
