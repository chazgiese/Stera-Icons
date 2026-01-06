import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalAltLowIcon as RegularSignalAltLowIcon } from './signal-alt-low';
import { SignalAltLowIconDuotone as SignalAltLowIconDuotone } from './signal-alt-low-duotone';
import { SignalAltLowIconBold as SignalAltLowIconBold } from './signal-alt-low-bold';
import { SignalAltLowIconBoldDuotone as SignalAltLowIconBoldDuotone } from './signal-alt-low-bold-duotone';
import { SignalAltLowIconFill as SignalAltLowIconFill } from './signal-alt-low-fill';
import { SignalAltLowIconFillDuotone as SignalAltLowIconFillDuotone } from './signal-alt-low-fill-duotone';

export interface SignalAltLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalAltLowIcon = memo(forwardRef<SVGSVGElement, SignalAltLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalAltLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalAltLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalAltLowIconFill ref={ref} {...props} />;
  if (duotone) return <SignalAltLowIconDuotone ref={ref} {...props} />;
  return <RegularSignalAltLowIcon ref={ref} {...props} />;
}));

SignalAltLowIcon.displayName = 'SignalAltLowIcon';

export { SignalAltLowIcon };
