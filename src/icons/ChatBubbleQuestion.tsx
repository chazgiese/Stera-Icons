import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChatBubbleQuestionRegular } from './ChatBubbleQuestionRegular.js';
import { ChatBubbleQuestionRegularDuotone } from './ChatBubbleQuestionRegularDuotone.js';
import { ChatBubbleQuestionBold } from './ChatBubbleQuestionBold.js';
import { ChatBubbleQuestionBoldDuotone } from './ChatBubbleQuestionBoldDuotone.js';
import { ChatBubbleQuestionFill } from './ChatBubbleQuestionFill.js';
import { ChatBubbleQuestionFillDuotone } from './ChatBubbleQuestionFillDuotone.js';

export interface ChatBubbleQuestionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleQuestion - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleQuestionRegular } from 'stera-icons/icons/ChatBubbleQuestionRegular';
 */
const ChatBubbleQuestion = memo(forwardRef<SVGSVGElement, ChatBubbleQuestionProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleQuestionBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleQuestionBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleQuestionFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleQuestionFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleQuestionRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleQuestionRegular ref={ref} {...rest} />;
}));

ChatBubbleQuestion.displayName = 'ChatBubbleQuestion';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestion, ChatBubbleQuestion as ChatBubbleQuestionIcon, ChatBubbleQuestion as SiChatBubbleQuestion };
export default ChatBubbleQuestion;
