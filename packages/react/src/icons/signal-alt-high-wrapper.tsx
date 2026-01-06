import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalAltHighIcon as RegularSignalAltHighIcon } from './signal-alt-high';
import { SignalAltHighIconDuotone as SignalAltHighIconDuotone } from './signal-alt-high-duotone';
import { SignalAltHighIconBold as SignalAltHighIconBold } from './signal-alt-high-bold';
import { SignalAltHighIconBoldDuotone as SignalAltHighIconBoldDuotone } from './signal-alt-high-bold-duotone';
import { SignalAltHighIconFill as SignalAltHighIconFill } from './signal-alt-high-fill';
import { SignalAltHighIconFillDuotone as SignalAltHighIconFillDuotone } from './signal-alt-high-fill-duotone';

export interface SignalAltHighIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalAltHighIcon = memo(forwardRef<SVGSVGElement, SignalAltHighIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltHighIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalAltHighIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalAltHighIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalAltHighIconFill ref={ref} {...props} />;
  if (duotone) return <SignalAltHighIconDuotone ref={ref} {...props} />;
  return <RegularSignalAltHighIcon ref={ref} {...props} />;
}));

SignalAltHighIcon.displayName = 'SignalAltHighIcon';

export { SignalAltHighIcon };
