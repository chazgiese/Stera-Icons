import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MacWindowCursorRegular } from './MacWindowCursorRegular.js';
import { MacWindowCursorRegularDuotone } from './MacWindowCursorRegularDuotone.js';
import { MacWindowCursorBold } from './MacWindowCursorBold.js';
import { MacWindowCursorBoldDuotone } from './MacWindowCursorBoldDuotone.js';
import { MacWindowCursorFill } from './MacWindowCursorFill.js';
import { MacWindowCursorFillDuotone } from './MacWindowCursorFillDuotone.js';

export interface MacWindowCursorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MacWindowCursor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MacWindowCursorRegular } from 'stera-icons/icons/MacWindowCursorRegular';
 */
const MacWindowCursor = memo(forwardRef<SVGSVGElement, MacWindowCursorProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MacWindowCursorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MacWindowCursorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MacWindowCursorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MacWindowCursorFill ref={ref} {...rest} />;
  if (duotone) return <MacWindowCursorRegularDuotone ref={ref} {...rest} />;
  return <MacWindowCursorRegular ref={ref} {...rest} />;
}));

MacWindowCursor.displayName = 'MacWindowCursor';

// Triple export pattern (lucide-react style)
export { MacWindowCursor, MacWindowCursor as MacWindowCursorIcon, MacWindowCursor as SiMacWindowCursor };
export default MacWindowCursor;
