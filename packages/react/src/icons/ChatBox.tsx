import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxRegular } from './ChatBoxRegular';
import { ChatBoxRegularDuotone } from './ChatBoxRegularDuotone';
import { ChatBoxBold } from './ChatBoxBold';
import { ChatBoxBoldDuotone } from './ChatBoxBoldDuotone';
import { ChatBoxFill } from './ChatBoxFill';
import { ChatBoxFillDuotone } from './ChatBoxFillDuotone';

export interface ChatBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBox with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxRegular } from 'stera-icons/ChatBoxRegular';
 */
const ChatBox = memo(forwardRef<SVGSVGElement, ChatBoxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxRegular ref={ref} {...rest} />;
}));

ChatBox.displayName = 'ChatBox';

export { ChatBox };
