import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlugRegular } from './PlugRegular.js';
import { PlugRegularDuotone } from './PlugRegularDuotone.js';
import { PlugBold } from './PlugBold.js';
import { PlugBoldDuotone } from './PlugBoldDuotone.js';
import { PlugFill } from './PlugFill.js';
import { PlugFillDuotone } from './PlugFillDuotone.js';

export interface PlugProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Plug - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlugRegular } from 'stera-icons/icons/PlugRegular';
 */
const Plug = memo(forwardRef<SVGSVGElement, PlugProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlugBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlugBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlugFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlugFill ref={ref} {...rest} />;
  if (duotone) return <PlugRegularDuotone ref={ref} {...rest} />;
  return <PlugRegular ref={ref} {...rest} />;
}));

Plug.displayName = 'Plug';

// Triple export pattern (lucide-react style)
export { Plug, Plug as PlugIcon, Plug as SiPlug };
export default Plug;
