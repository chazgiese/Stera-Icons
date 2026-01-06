import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SendVIcon as RegularSendVIcon } from './send-v';
import { SendVIconDuotone as SendVIconDuotone } from './send-v-duotone';
import { SendVIconBold as SendVIconBold } from './send-v-bold';
import { SendVIconBoldDuotone as SendVIconBoldDuotone } from './send-v-bold-duotone';
import { SendVIconFill as SendVIconFill } from './send-v-fill';
import { SendVIconFillDuotone as SendVIconFillDuotone } from './send-v-fill-duotone';

export interface SendVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SendVIcon = memo(forwardRef<SVGSVGElement, SendVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SendVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SendVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SendVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SendVIconFill ref={ref} {...props} />;
  if (duotone) return <SendVIconDuotone ref={ref} {...props} />;
  return <RegularSendVIcon ref={ref} {...props} />;
}));

SendVIcon.displayName = 'SendVIcon';

export { SendVIcon };
