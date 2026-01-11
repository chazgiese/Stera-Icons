import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxQuestionIcon as RegularChatBoxQuestionIcon } from './chat-box-question';
import { ChatBoxQuestionIconDuotone as ChatBoxQuestionIconDuotone } from './chat-box-question-duotone';
import { ChatBoxQuestionIconBold as ChatBoxQuestionIconBold } from './chat-box-question-bold';
import { ChatBoxQuestionIconBoldDuotone as ChatBoxQuestionIconBoldDuotone } from './chat-box-question-bold-duotone';
import { ChatBoxQuestionIconFill as ChatBoxQuestionIconFill } from './chat-box-question-fill';
import { ChatBoxQuestionIconFillDuotone as ChatBoxQuestionIconFillDuotone } from './chat-box-question-fill-duotone';

export interface ChatBoxQuestionIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChatBoxQuestionIcon = memo(forwardRef<SVGSVGElement, ChatBoxQuestionIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxQuestionIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChatBoxQuestionIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChatBoxQuestionIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChatBoxQuestionIconFill ref={ref} {...props} />;
  if (duotone) return <ChatBoxQuestionIconDuotone ref={ref} {...props} />;
  return <RegularChatBoxQuestionIcon ref={ref} {...props} />;
}));

ChatBoxQuestionIcon.displayName = 'ChatBoxQuestionIcon';

export { ChatBoxQuestionIcon };
