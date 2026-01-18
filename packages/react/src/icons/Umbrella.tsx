import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UmbrellaRegular } from './UmbrellaRegular';
import { UmbrellaRegularDuotone } from './UmbrellaRegularDuotone';
import { UmbrellaBold } from './UmbrellaBold';
import { UmbrellaBoldDuotone } from './UmbrellaBoldDuotone';
import { UmbrellaFill } from './UmbrellaFill';
import { UmbrellaFillDuotone } from './UmbrellaFillDuotone';

export interface UmbrellaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Umbrella - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UmbrellaRegular } from 'stera-icons/UmbrellaRegular';
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
