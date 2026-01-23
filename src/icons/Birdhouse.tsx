import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BirdhouseRegular } from './BirdhouseRegular.js';
import { BirdhouseRegularDuotone } from './BirdhouseRegularDuotone.js';
import { BirdhouseBold } from './BirdhouseBold.js';
import { BirdhouseBoldDuotone } from './BirdhouseBoldDuotone.js';
import { BirdhouseFill } from './BirdhouseFill.js';
import { BirdhouseFillDuotone } from './BirdhouseFillDuotone.js';

export interface BirdhouseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Birdhouse - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BirdhouseRegular } from 'stera-icons/icons/BirdhouseRegular';
 */
const Birdhouse = memo(forwardRef<SVGSVGElement, BirdhouseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BirdhouseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BirdhouseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BirdhouseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BirdhouseFill ref={ref} {...rest} />;
  if (duotone) return <BirdhouseRegularDuotone ref={ref} {...rest} />;
  return <BirdhouseRegular ref={ref} {...rest} />;
}));

Birdhouse.displayName = 'Birdhouse';

// Triple export pattern (lucide-react style)
export { Birdhouse, Birdhouse as BirdhouseIcon, Birdhouse as SiBirdhouse };
export default Birdhouse;
