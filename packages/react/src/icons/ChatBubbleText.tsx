import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleTextRegular } from './ChatBubbleTextRegular';
import { ChatBubbleTextRegularDuotone } from './ChatBubbleTextRegularDuotone';
import { ChatBubbleTextBold } from './ChatBubbleTextBold';
import { ChatBubbleTextBoldDuotone } from './ChatBubbleTextBoldDuotone';
import { ChatBubbleTextFill } from './ChatBubbleTextFill';
import { ChatBubbleTextFillDuotone } from './ChatBubbleTextFillDuotone';

export interface ChatBubbleTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleTextRegular } from 'stera-icons/ChatBubbleTextRegular';
 */
const ChatBubbleText = memo(forwardRef<SVGSVGElement, ChatBubbleTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleTextFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleTextRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleTextRegular ref={ref} {...rest} />;
}));

ChatBubbleText.displayName = 'ChatBubbleText';

// Triple export pattern (lucide-react style)
export { ChatBubbleText, ChatBubbleText as ChatBubbleTextIcon, ChatBubbleText as SiChatBubbleText };
