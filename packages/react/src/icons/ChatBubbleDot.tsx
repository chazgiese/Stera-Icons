import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBubbleDotRegular } from './ChatBubbleDotRegular';
import { ChatBubbleDotRegularDuotone } from './ChatBubbleDotRegularDuotone';
import { ChatBubbleDotBold } from './ChatBubbleDotBold';
import { ChatBubbleDotBoldDuotone } from './ChatBubbleDotBoldDuotone';
import { ChatBubbleDotFill } from './ChatBubbleDotFill';
import { ChatBubbleDotFillDuotone } from './ChatBubbleDotFillDuotone';

export interface ChatBubbleDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBubbleDot with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBubbleDotRegular } from 'stera-icons/ChatBubbleDotRegular';
 */
const ChatBubbleDot = memo(forwardRef<SVGSVGElement, ChatBubbleDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBubbleDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBubbleDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBubbleDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBubbleDotFill ref={ref} {...rest} />;
  if (duotone) return <ChatBubbleDotRegularDuotone ref={ref} {...rest} />;
  return <ChatBubbleDotRegular ref={ref} {...rest} />;
}));

ChatBubbleDot.displayName = 'ChatBubbleDot';

export { ChatBubbleDot };
