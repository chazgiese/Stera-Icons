import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDotRegular } from './ChatBoxDotRegular';
import { ChatBoxDotRegularDuotone } from './ChatBoxDotRegularDuotone';
import { ChatBoxDotBold } from './ChatBoxDotBold';
import { ChatBoxDotBoldDuotone } from './ChatBoxDotBoldDuotone';
import { ChatBoxDotFill } from './ChatBoxDotFill';
import { ChatBoxDotFillDuotone } from './ChatBoxDotFillDuotone';

export interface ChatBoxDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxDot with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxDotRegular } from 'stera-icons/ChatBoxDotRegular';
 */
const ChatBoxDot = memo(forwardRef<SVGSVGElement, ChatBoxDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxDotFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxDotRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxDotRegular ref={ref} {...rest} />;
}));

ChatBoxDot.displayName = 'ChatBoxDot';

export { ChatBoxDot };
