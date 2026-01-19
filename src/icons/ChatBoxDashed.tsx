import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChatBoxDashedRegular } from './ChatBoxDashedRegular';
import { ChatBoxDashedRegularDuotone } from './ChatBoxDashedRegularDuotone';
import { ChatBoxDashedBold } from './ChatBoxDashedBold';
import { ChatBoxDashedBoldDuotone } from './ChatBoxDashedBoldDuotone';
import { ChatBoxDashedFill } from './ChatBoxDashedFill';
import { ChatBoxDashedFillDuotone } from './ChatBoxDashedFillDuotone';

export interface ChatBoxDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChatBoxDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChatBoxDashedRegular } from 'stera-icons/icons/ChatBoxDashedRegular';
 */
const ChatBoxDashed = memo(forwardRef<SVGSVGElement, ChatBoxDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChatBoxDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChatBoxDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChatBoxDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChatBoxDashedFill ref={ref} {...rest} />;
  if (duotone) return <ChatBoxDashedRegularDuotone ref={ref} {...rest} />;
  return <ChatBoxDashedRegular ref={ref} {...rest} />;
}));

ChatBoxDashed.displayName = 'ChatBoxDashed';

// Triple export pattern (lucide-react style)
export { ChatBoxDashed, ChatBoxDashed as ChatBoxDashedIcon, ChatBoxDashed as SiChatBoxDashed };
