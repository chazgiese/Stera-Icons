import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleCheckRegular } from './ChatBubbleCheckRegular';
import { ChatBubbleCheckRegularDuotone } from './ChatBubbleCheckRegularDuotone';
import { ChatBubbleCheckBold } from './ChatBubbleCheckBold';
import { ChatBubbleCheckBoldDuotone } from './ChatBubbleCheckBoldDuotone';
import { ChatBubbleCheckFill } from './ChatBubbleCheckFill';
import { ChatBubbleCheckFillDuotone } from './ChatBubbleCheckFillDuotone';

export interface ChatBubbleCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleCheck with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleCheckRegular } from 'stera-icons/ChatBubbleCheckRegular';
 */
const ChatBubbleCheck = memo(forwardRef<SVGSVGElement, ChatBubbleCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleCheckFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleCheckRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleCheckRegular ref={ref} {...rest} />;
}));

ChatBubbleCheck.displayName = 'ChatBubbleCheck';

export { ChatBubbleCheck };
