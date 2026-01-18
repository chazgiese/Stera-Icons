import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubblePlusRegular } from './ChatBubblePlusRegular';
import { ChatBubblePlusRegularDuotone } from './ChatBubblePlusRegularDuotone';
import { ChatBubblePlusBold } from './ChatBubblePlusBold';
import { ChatBubblePlusBoldDuotone } from './ChatBubblePlusBoldDuotone';
import { ChatBubblePlusFill } from './ChatBubblePlusFill';
import { ChatBubblePlusFillDuotone } from './ChatBubblePlusFillDuotone';

export interface ChatBubblePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubblePlus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubblePlusRegular } from 'stera-icons/ChatBubblePlusRegular';
 */
const ChatBubblePlus = memo(forwardRef<SVGSVGElement, ChatBubblePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubblePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubblePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubblePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubblePlusFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubblePlusRegularDuotone ref={ref} {...rest} />;
  return <ChatBubblePlusRegular ref={ref} {...rest} />;
}));

ChatBubblePlus.displayName = 'ChatBubblePlus';

export { ChatBubblePlus };
