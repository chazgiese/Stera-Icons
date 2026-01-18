import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CityRegular } from './CityRegular';
import { CityRegularDuotone } from './CityRegularDuotone';
import { CityBold } from './CityBold';
import { CityBoldDuotone } from './CityBoldDuotone';
import { CityFill } from './CityFill';
import { CityFillDuotone } from './CityFillDuotone';

export interface CityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * City - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CityRegular } from 'stera-icons/CityRegular';
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
