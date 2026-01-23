import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KeyboardRegular } from './KeyboardRegular.js';
import { KeyboardRegularDuotone } from './KeyboardRegularDuotone.js';
import { KeyboardBold } from './KeyboardBold.js';
import { KeyboardBoldDuotone } from './KeyboardBoldDuotone.js';
import { KeyboardFill } from './KeyboardFill.js';
import { KeyboardFillDuotone } from './KeyboardFillDuotone.js';

export interface KeyboardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Keyboard - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyboardRegular } from 'stera-icons/icons/KeyboardRegular';
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

// Triple export pattern (lucide-react style)
export { Keyboard, Keyboard as KeyboardIcon, Keyboard as SiKeyboard };
export default Keyboard;
