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
 * ToyBrick with dynamic weight and duotone props.
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

export { ToyBrick };
