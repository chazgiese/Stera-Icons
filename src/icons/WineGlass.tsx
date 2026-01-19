import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineGlassRegular } from './WineGlassRegular';
import { WineGlassRegularDuotone } from './WineGlassRegularDuotone';
import { WineGlassBold } from './WineGlassBold';
import { WineGlassBoldDuotone } from './WineGlassBoldDuotone';
import { WineGlassFill } from './WineGlassFill';
import { WineGlassFillDuotone } from './WineGlassFillDuotone';

export interface WineGlassProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WineGlass - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WineGlassRegular } from 'stera-icons/icons/WineGlassRegular';
 */
const WineGlass = memo(forwardRef<SVGSVGElement, WineGlassProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineGlassBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WineGlassBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WineGlassFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WineGlassFill ref={ref} {...rest} />;
  if (duotone) return <WineGlassRegularDuotone ref={ref} {...rest} />;
  return <WineGlassRegular ref={ref} {...rest} />;
}));

WineGlass.displayName = 'WineGlass';

// Triple export pattern (lucide-react style)
export { WineGlass, WineGlass as WineGlassIcon, WineGlass as SiWineGlass };
export default WineGlass;
