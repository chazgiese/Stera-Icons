import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MacWindowRegular } from './MacWindowRegular.js';
import { MacWindowRegularDuotone } from './MacWindowRegularDuotone.js';
import { MacWindowBold } from './MacWindowBold.js';
import { MacWindowBoldDuotone } from './MacWindowBoldDuotone.js';
import { MacWindowFill } from './MacWindowFill.js';
import { MacWindowFillDuotone } from './MacWindowFillDuotone.js';

export interface MacWindowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MacWindow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MacWindowRegular } from 'stera-icons/icons/MacWindowRegular';
 */
const MacWindow = memo(forwardRef<SVGSVGElement, MacWindowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MacWindowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MacWindowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MacWindowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MacWindowFill ref={ref} {...rest} />;
  if (duotone) return <MacWindowRegularDuotone ref={ref} {...rest} />;
  return <MacWindowRegular ref={ref} {...rest} />;
}));

MacWindow.displayName = 'MacWindow';

// Triple export pattern (lucide-react style)
export { MacWindow, MacWindow as MacWindowIcon, MacWindow as SiMacWindow };
export default MacWindow;
