import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxOffRegular } from './ChatBoxOffRegular';
import { ChatBoxOffRegularDuotone } from './ChatBoxOffRegularDuotone';
import { ChatBoxOffBold } from './ChatBoxOffBold';
import { ChatBoxOffBoldDuotone } from './ChatBoxOffBoldDuotone';
import { ChatBoxOffFill } from './ChatBoxOffFill';
import { ChatBoxOffFillDuotone } from './ChatBoxOffFillDuotone';

export interface ChatBoxOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxOff with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxOffRegular } from 'stera-icons/ChatBoxOffRegular';
 */
const ChatBoxOff = memo(forwardRef<SVGSVGElement, ChatBoxOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxOffFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxOffRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxOffRegular ref={ref} {...rest} />;
}));

ChatBoxOff.displayName = 'ChatBoxOff';

export { ChatBoxOff };
