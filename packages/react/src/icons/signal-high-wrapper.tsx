import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalHighIcon as RegularSignalHighIcon } from './signal-high';
import { SignalHighIconDuotone as SignalHighIconDuotone } from './signal-high-duotone';
import { SignalHighIconBold as SignalHighIconBold } from './signal-high-bold';
import { SignalHighIconBoldDuotone as SignalHighIconBoldDuotone } from './signal-high-bold-duotone';
import { SignalHighIconFill as SignalHighIconFill } from './signal-high-fill';
import { SignalHighIconFillDuotone as SignalHighIconFillDuotone } from './signal-high-fill-duotone';

export interface SignalHighIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalHighIcon = memo(forwardRef<SVGSVGElement, SignalHighIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalHighIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalHighIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalHighIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalHighIconFill ref={ref} {...props} />;
  if (duotone) return <SignalHighIconDuotone ref={ref} {...props} />;
  return <RegularSignalHighIcon ref={ref} {...props} />;
}));

SignalHighIcon.displayName = 'SignalHighIcon';

export { SignalHighIcon };
