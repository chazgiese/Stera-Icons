import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyboardIcon as RegularKeyboardIcon } from './keyboard';
import { KeyboardIconDuotone as KeyboardIconDuotone } from './keyboard-duotone';
import { KeyboardIconBold as KeyboardIconBold } from './keyboard-bold';
import { KeyboardIconBoldDuotone as KeyboardIconBoldDuotone } from './keyboard-bold-duotone';
import { KeyboardIconFill as KeyboardIconFill } from './keyboard-fill';
import { KeyboardIconFillDuotone as KeyboardIconFillDuotone } from './keyboard-fill-duotone';

export interface KeyboardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const KeyboardIcon = memo(forwardRef<SVGSVGElement, KeyboardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyboardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <KeyboardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <KeyboardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <KeyboardIconFill ref={ref} {...props} />;
  if (duotone) return <KeyboardIconDuotone ref={ref} {...props} />;
  return <RegularKeyboardIcon ref={ref} {...props} />;
}));

KeyboardIcon.displayName = 'KeyboardIcon';

export { KeyboardIcon };
