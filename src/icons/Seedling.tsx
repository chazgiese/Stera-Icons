import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SeedlingRegular } from './SeedlingRegular.js';
import { SeedlingRegularDuotone } from './SeedlingRegularDuotone.js';
import { SeedlingBold } from './SeedlingBold.js';
import { SeedlingBoldDuotone } from './SeedlingBoldDuotone.js';
import { SeedlingFill } from './SeedlingFill.js';
import { SeedlingFillDuotone } from './SeedlingFillDuotone.js';

export interface SeedlingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Seedling - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SeedlingRegular } from 'stera-icons/icons/SeedlingRegular';
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
export default Seedling;
