import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalMediumIcon as RegularSignalMediumIcon } from './signal-medium';
import { SignalMediumIconDuotone as SignalMediumIconDuotone } from './signal-medium-duotone';
import { SignalMediumIconBold as SignalMediumIconBold } from './signal-medium-bold';
import { SignalMediumIconBoldDuotone as SignalMediumIconBoldDuotone } from './signal-medium-bold-duotone';
import { SignalMediumIconFill as SignalMediumIconFill } from './signal-medium-fill';
import { SignalMediumIconFillDuotone as SignalMediumIconFillDuotone } from './signal-medium-fill-duotone';

export interface SignalMediumIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalMediumIcon = memo(forwardRef<SVGSVGElement, SignalMediumIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalMediumIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalMediumIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalMediumIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalMediumIconFill ref={ref} {...props} />;
  if (duotone) return <SignalMediumIconDuotone ref={ref} {...props} />;
  return <RegularSignalMediumIcon ref={ref} {...props} />;
}));

SignalMediumIcon.displayName = 'SignalMediumIcon';

export { SignalMediumIcon };
