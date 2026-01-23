import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SlashRegular } from './SlashRegular.js';
import { SlashRegularDuotone } from './SlashRegularDuotone.js';
import { SlashBold } from './SlashBold.js';
import { SlashBoldDuotone } from './SlashBoldDuotone.js';
import { SlashFill } from './SlashFill.js';
import { SlashFillDuotone } from './SlashFillDuotone.js';

export interface SlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Slash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SlashRegular } from 'stera-icons/icons/SlashRegular';
 */
const Slash = memo(forwardRef<SVGSVGElement, SlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SlashFill ref={ref} {...rest} />;
  if (duotone) return <SlashRegularDuotone ref={ref} {...rest} />;
  return <SlashRegular ref={ref} {...rest} />;
}));

Slash.displayName = 'Slash';

// Triple export pattern (lucide-react style)
export { Slash, Slash as SlashIcon, Slash as SiSlash };
export default Slash;
