import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxCheckRegular } from './ChatBoxCheckRegular';
import { ChatBoxCheckRegularDuotone } from './ChatBoxCheckRegularDuotone';
import { ChatBoxCheckBold } from './ChatBoxCheckBold';
import { ChatBoxCheckBoldDuotone } from './ChatBoxCheckBoldDuotone';
import { ChatBoxCheckFill } from './ChatBoxCheckFill';
import { ChatBoxCheckFillDuotone } from './ChatBoxCheckFillDuotone';

export interface ChatBoxCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxCheck with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxCheckRegular } from 'stera-icons/ChatBoxCheckRegular';
 */
const ChatBoxCheck = memo(forwardRef<SVGSVGElement, ChatBoxCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxCheckFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxCheckRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxCheckRegular ref={ref} {...rest} />;
}));

ChatBoxCheck.displayName = 'ChatBoxCheck';

export { ChatBoxCheck };
