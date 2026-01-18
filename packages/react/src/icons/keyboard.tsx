import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyboardRegular } from './KeyboardRegular';
import { KeyboardRegularDuotone } from './KeyboardRegularDuotone';
import { KeyboardBold } from './KeyboardBold';
import { KeyboardBoldDuotone } from './KeyboardBoldDuotone';
import { KeyboardFill } from './KeyboardFill';
import { KeyboardFillDuotone } from './KeyboardFillDuotone';

export interface KeyboardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Keyboard with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { KeyboardRegular } from 'stera-icons/KeyboardRegular';
 */
const Keyboard = memo(forwardRef<SVGSVGElement, KeyboardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyboardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyboardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyboardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyboardFill ref={ref} {...rest} />;
  if (duotone) return <KeyboardRegularDuotone ref={ref} {...rest} />;
  return <KeyboardRegular ref={ref} {...rest} />;
}));

Keyboard.displayName = 'Keyboard';

export { Keyboard };
