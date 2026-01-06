import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalLowIcon as RegularSignalLowIcon } from './signal-low';
import { SignalLowIconDuotone as SignalLowIconDuotone } from './signal-low-duotone';
import { SignalLowIconBold as SignalLowIconBold } from './signal-low-bold';
import { SignalLowIconBoldDuotone as SignalLowIconBoldDuotone } from './signal-low-bold-duotone';
import { SignalLowIconFill as SignalLowIconFill } from './signal-low-fill';
import { SignalLowIconFillDuotone as SignalLowIconFillDuotone } from './signal-low-fill-duotone';

export interface SignalLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalLowIcon = memo(forwardRef<SVGSVGElement, SignalLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalLowIconFill ref={ref} {...props} />;
  if (duotone) return <SignalLowIconDuotone ref={ref} {...props} />;
  return <RegularSignalLowIcon ref={ref} {...props} />;
}));

SignalLowIcon.displayName = 'SignalLowIcon';

export { SignalLowIcon };
