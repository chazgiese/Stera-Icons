import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleQuestionRegular } from './ChatBubbleQuestionRegular';
import { ChatBubbleQuestionRegularDuotone } from './ChatBubbleQuestionRegularDuotone';
import { ChatBubbleQuestionBold } from './ChatBubbleQuestionBold';
import { ChatBubbleQuestionBoldDuotone } from './ChatBubbleQuestionBoldDuotone';
import { ChatBubbleQuestionFill } from './ChatBubbleQuestionFill';
import { ChatBubbleQuestionFillDuotone } from './ChatBubbleQuestionFillDuotone';

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
