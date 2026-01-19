import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BirdhouseRegular } from './BirdhouseRegular';
import { BirdhouseRegularDuotone } from './BirdhouseRegularDuotone';
import { BirdhouseBold } from './BirdhouseBold';
import { BirdhouseBoldDuotone } from './BirdhouseBoldDuotone';
import { BirdhouseFill } from './BirdhouseFill';
import { BirdhouseFillDuotone } from './BirdhouseFillDuotone';

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
