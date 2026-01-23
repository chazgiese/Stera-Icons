import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UmbrellaRegular } from './UmbrellaRegular.js';
import { UmbrellaRegularDuotone } from './UmbrellaRegularDuotone.js';
import { UmbrellaBold } from './UmbrellaBold.js';
import { UmbrellaBoldDuotone } from './UmbrellaBoldDuotone.js';
import { UmbrellaFill } from './UmbrellaFill.js';
import { UmbrellaFillDuotone } from './UmbrellaFillDuotone.js';

export interface UmbrellaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Umbrella - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UmbrellaRegular } from 'stera-icons/icons/UmbrellaRegular';
 */
const Umbrella = memo(forwardRef<SVGSVGElement, UmbrellaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UmbrellaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UmbrellaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UmbrellaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UmbrellaFill ref={ref} {...rest} />;
  if (duotone) return <UmbrellaRegularDuotone ref={ref} {...rest} />;
  return <UmbrellaRegular ref={ref} {...rest} />;
}));

Umbrella.displayName = 'Umbrella';

// Triple export pattern (lucide-react style)
export { Umbrella, Umbrella as UmbrellaIcon, Umbrella as SiUmbrella };
export default Umbrella;
