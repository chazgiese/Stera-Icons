import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendIcon as RegularSendIcon } from './send';
import { SendIconDuotone as SendIconDuotone } from './send-duotone';
import { SendIconBold as SendIconBold } from './send-bold';
import { SendIconBoldDuotone as SendIconBoldDuotone } from './send-bold-duotone';
import { SendIconFill as SendIconFill } from './send-fill';
import { SendIconFillDuotone as SendIconFillDuotone } from './send-fill-duotone';

export interface SendIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SendIcon = memo(forwardRef<SVGSVGElement, SendIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SendIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SendIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SendIconFill ref={ref} {...props} />;
  if (duotone) return <SendIconDuotone ref={ref} {...props} />;
  return <RegularSendIcon ref={ref} {...props} />;
}));

SendIcon.displayName = 'SendIcon';

export { SendIcon };
