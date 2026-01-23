import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CityRegular } from './CityRegular.js';
import { CityRegularDuotone } from './CityRegularDuotone.js';
import { CityBold } from './CityBold.js';
import { CityBoldDuotone } from './CityBoldDuotone.js';
import { CityFill } from './CityFill.js';
import { CityFillDuotone } from './CityFillDuotone.js';

export interface CityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * City - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CityRegular } from 'stera-icons/icons/CityRegular';
 */
const City = memo(forwardRef<SVGSVGElement, CityProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CityBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CityBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CityFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CityFill ref={ref} {...rest} />;
  if (duotone) return <CityRegularDuotone ref={ref} {...rest} />;
  return <CityRegular ref={ref} {...rest} />;
}));

City.displayName = 'City';

// Triple export pattern (lucide-react style)
export { City, City as CityIcon, City as SiCity };
export default City;
