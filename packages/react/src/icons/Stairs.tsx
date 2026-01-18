import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StairsRegular } from './StairsRegular';
import { StairsRegularDuotone } from './StairsRegularDuotone';
import { StairsBold } from './StairsBold';
import { StairsBoldDuotone } from './StairsBoldDuotone';
import { StairsFill } from './StairsFill';
import { StairsFillDuotone } from './StairsFillDuotone';

export interface StairsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Stairs with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { StairsRegular } from 'stera-icons/StairsRegular';
 */
const Stairs = memo(forwardRef<SVGSVGElement, StairsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StairsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StairsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StairsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StairsFill ref={ref} {...rest} />;
  if (duotone) return <StairsRegularDuotone ref={ref} {...rest} />;
  return <StairsRegular ref={ref} {...rest} />;
}));

Stairs.displayName = 'Stairs';

export { Stairs };
