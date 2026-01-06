import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalZeroIcon as RegularSignalZeroIcon } from './signal-zero';
import { SignalZeroIconDuotone as SignalZeroIconDuotone } from './signal-zero-duotone';
import { SignalZeroIconBold as SignalZeroIconBold } from './signal-zero-bold';
import { SignalZeroIconBoldDuotone as SignalZeroIconBoldDuotone } from './signal-zero-bold-duotone';
import { SignalZeroIconFill as SignalZeroIconFill } from './signal-zero-fill';
import { SignalZeroIconFillDuotone as SignalZeroIconFillDuotone } from './signal-zero-fill-duotone';

export interface SignalZeroIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignalZeroIcon = memo(forwardRef<SVGSVGElement, SignalZeroIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalZeroIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignalZeroIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignalZeroIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignalZeroIconFill ref={ref} {...props} />;
  if (duotone) return <SignalZeroIconDuotone ref={ref} {...props} />;
  return <RegularSignalZeroIcon ref={ref} {...props} />;
}));

SignalZeroIcon.displayName = 'SignalZeroIcon';

export { SignalZeroIcon };
