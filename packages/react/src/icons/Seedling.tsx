import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SeedlingRegular } from './SeedlingRegular';
import { SeedlingRegularDuotone } from './SeedlingRegularDuotone';
import { SeedlingBold } from './SeedlingBold';
import { SeedlingBoldDuotone } from './SeedlingBoldDuotone';
import { SeedlingFill } from './SeedlingFill';
import { SeedlingFillDuotone } from './SeedlingFillDuotone';

export interface SeedlingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Seedling - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SeedlingRegular } from 'stera-icons/SeedlingRegular';
 */
const Seedling = memo(forwardRef<SVGSVGElement, SeedlingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SeedlingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SeedlingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SeedlingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SeedlingFill ref={ref} {...rest} />;
  if (duotone) return <SeedlingRegularDuotone ref={ref} {...rest} />;
  return <SeedlingRegular ref={ref} {...rest} />;
}));

Seedling.displayName = 'Seedling';

// Triple export pattern (lucide-react style)
export { Seedling, Seedling as SeedlingIcon, Seedling as SiSeedling };
