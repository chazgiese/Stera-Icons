import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleQuestionIcon as RegularChatBubbleQuestionIcon } from './chat-bubble-question';
import { ChatBubbleQuestionIconDuotone as ChatBubbleQuestionIconDuotone } from './chat-bubble-question-duotone';
import { ChatBubbleQuestionIconBold as ChatBubbleQuestionIconBold } from './chat-bubble-question-bold';
import { ChatBubbleQuestionIconBoldDuotone as ChatBubbleQuestionIconBoldDuotone } from './chat-bubble-question-bold-duotone';
import { ChatBubbleQuestionIconFill as ChatBubbleQuestionIconFill } from './chat-bubble-question-fill';
import { ChatBubbleQuestionIconFillDuotone as ChatBubbleQuestionIconFillDuotone } from './chat-bubble-question-fill-duotone';

export interface ChatBubbleQuestionIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBubbleQuestionIcon = memo(forwardRef<SVGSVGElement, ChatBubbleQuestionIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleQuestionIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBubbleQuestionIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBubbleQuestionIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBubbleQuestionIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBubbleQuestionIconDuotone ref={ref} {...props} />;
  return <RegularChatBubbleQuestionIcon ref={ref} {...props} />;
}));

ChatBubbleQuestionIcon.displayName = 'ChatBubbleQuestionIcon';

export { ChatBubbleQuestionIcon };
