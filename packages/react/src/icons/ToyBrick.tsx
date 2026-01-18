import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToyBrickRegular } from './ToyBrickRegular';
import { ToyBrickRegularDuotone } from './ToyBrickRegularDuotone';
import { ToyBrickBold } from './ToyBrickBold';
import { ToyBrickBoldDuotone } from './ToyBrickBoldDuotone';
import { ToyBrickFill } from './ToyBrickFill';
import { ToyBrickFillDuotone } from './ToyBrickFillDuotone';

export interface ToyBrickProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ToyBrick - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ToyBrickRegular } from 'stera-icons/ToyBrickRegular';
 */
const ToyBrick = memo(forwardRef<SVGSVGElement, ToyBrickProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToyBrickBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ToyBrickBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ToyBrickFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ToyBrickFill ref={ref} {...rest} />;
  if (duotone) return <ToyBrickRegularDuotone ref={ref} {...rest} />;
  return <ToyBrickRegular ref={ref} {...rest} />;
}));

ToyBrick.displayName = 'ToyBrick';

// Triple export pattern (lucide-react style)
export { ToyBrick, ToyBrick as ToyBrickIcon, ToyBrick as SiToyBrick };
