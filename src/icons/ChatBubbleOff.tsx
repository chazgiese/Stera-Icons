import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleOffRegular } from './ChatBubbleOffRegular';
import { ChatBubbleOffRegularDuotone } from './ChatBubbleOffRegularDuotone';
import { ChatBubbleOffBold } from './ChatBubbleOffBold';
import { ChatBubbleOffBoldDuotone } from './ChatBubbleOffBoldDuotone';
import { ChatBubbleOffFill } from './ChatBubbleOffFill';
import { ChatBubbleOffFillDuotone } from './ChatBubbleOffFillDuotone';

export interface ChatBubbleOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleOffRegular } from 'stera-icons/icons/ChatBubbleOffRegular';
 */
const ChatBubbleOff = memo(forwardRef<SVGSVGElement, ChatBubbleOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleOffFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleOffRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleOffRegular ref={ref} {...rest} />;
}));

ChatBubbleOff.displayName = 'ChatBubbleOff';

// Triple export pattern (lucide-react style)
export { ChatBubbleOff, ChatBubbleOff as ChatBubbleOffIcon, ChatBubbleOff as SiChatBubbleOff };
