import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxQuestionRegular } from './ChatBoxQuestionRegular';
import { ChatBoxQuestionRegularDuotone } from './ChatBoxQuestionRegularDuotone';
import { ChatBoxQuestionBold } from './ChatBoxQuestionBold';
import { ChatBoxQuestionBoldDuotone } from './ChatBoxQuestionBoldDuotone';
import { ChatBoxQuestionFill } from './ChatBoxQuestionFill';
import { ChatBoxQuestionFillDuotone } from './ChatBoxQuestionFillDuotone';

export interface ChatBoxQuestionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxQuestion - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxQuestionRegular } from 'stera-icons/icons/ChatBoxQuestionRegular';
 */
const ChatBoxQuestion = memo(forwardRef<SVGSVGElement, ChatBoxQuestionProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxQuestionBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxQuestionBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxQuestionFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxQuestionFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxQuestionRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxQuestionRegular ref={ref} {...rest} />;
}));

ChatBoxQuestion.displayName = 'ChatBoxQuestion';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestion, ChatBoxQuestion as ChatBoxQuestionIcon, ChatBoxQuestion as SiChatBoxQuestion };
export default ChatBoxQuestion;
