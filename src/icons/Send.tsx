import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendRegular } from './SendRegular';
import { SendRegularDuotone } from './SendRegularDuotone';
import { SendBold } from './SendBold';
import { SendBoldDuotone } from './SendBoldDuotone';
import { SendFill } from './SendFill';
import { SendFillDuotone } from './SendFillDuotone';

export interface SendProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Send - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SendRegular } from 'stera-icons/icons/SendRegular';
 */
const Send = memo(forwardRef<SVGSVGElement, SendProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SendBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SendFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SendFill ref={ref} {...rest} />;
  if (duotone) return <SendRegularDuotone ref={ref} {...rest} />;
  return <SendRegular ref={ref} {...rest} />;
}));

Send.displayName = 'Send';

// Triple export pattern (lucide-react style)
export { Send, Send as SendIcon, Send as SiSend };
export default Send;
