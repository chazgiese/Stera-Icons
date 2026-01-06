import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendHIcon as RegularSendHIcon } from './send-h';
import { SendHIconDuotone as SendHIconDuotone } from './send-h-duotone';
import { SendHIconBold as SendHIconBold } from './send-h-bold';
import { SendHIconBoldDuotone as SendHIconBoldDuotone } from './send-h-bold-duotone';
import { SendHIconFill as SendHIconFill } from './send-h-fill';
import { SendHIconFillDuotone as SendHIconFillDuotone } from './send-h-fill-duotone';

export interface SendHIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SendHIcon = memo(forwardRef<SVGSVGElement, SendHIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendHIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SendHIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SendHIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SendHIconFill ref={ref} {...props} />;
  if (duotone) return <SendHIconDuotone ref={ref} {...props} />;
  return <RegularSendHIcon ref={ref} {...props} />;
}));

SendHIcon.displayName = 'SendHIcon';

export { SendHIcon };
