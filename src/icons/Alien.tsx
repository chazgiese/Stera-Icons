import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlienRegular } from './AlienRegular';
import { AlienRegularDuotone } from './AlienRegularDuotone';
import { AlienBold } from './AlienBold';
import { AlienBoldDuotone } from './AlienBoldDuotone';
import { AlienFill } from './AlienFill';
import { AlienFillDuotone } from './AlienFillDuotone';

export interface AlienProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Alien - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlienRegular } from 'stera-icons/icons/AlienRegular';
 */
const Alien = memo(forwardRef<SVGSVGElement, AlienProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlienBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlienBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlienFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlienFill ref={ref} {...rest} />;
  if (duotone) return <AlienRegularDuotone ref={ref} {...rest} />;
  return <AlienRegular ref={ref} {...rest} />;
}));

Alien.displayName = 'Alien';

// Triple export pattern (lucide-react style)
export { Alien, Alien as AlienIcon, Alien as SiAlien };
