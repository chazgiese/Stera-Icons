import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalAltMediumIcon as RegularSignalAltMediumIcon } from './signal-alt-medium';
import { SignalAltMediumIconDuotone as SignalAltMediumIconDuotone } from './signal-alt-medium-duotone';
import { SignalAltMediumIconBold as SignalAltMediumIconBold } from './signal-alt-medium-bold';
import { SignalAltMediumIconBoldDuotone as SignalAltMediumIconBoldDuotone } from './signal-alt-medium-bold-duotone';
import { SignalAltMediumIconFill as SignalAltMediumIconFill } from './signal-alt-medium-fill';
import { SignalAltMediumIconFillDuotone as SignalAltMediumIconFillDuotone } from './signal-alt-medium-fill-duotone';

export interface SignalAltMediumIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalAltMediumIcon = memo(forwardRef<SVGSVGElement, SignalAltMediumIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltMediumIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalAltMediumIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalAltMediumIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalAltMediumIconFill ref={ref} {...props} />;
  if (duotone) return <SignalAltMediumIconDuotone ref={ref} {...props} />;
  return <RegularSignalAltMediumIcon ref={ref} {...props} />;
}));

SignalAltMediumIcon.displayName = 'SignalAltMediumIcon';

export { SignalAltMediumIcon };
