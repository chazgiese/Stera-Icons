import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GradientRegular } from './GradientRegular';
import { GradientRegularDuotone } from './GradientRegularDuotone';
import { GradientBold } from './GradientBold';
import { GradientBoldDuotone } from './GradientBoldDuotone';
import { GradientFill } from './GradientFill';
import { GradientFillDuotone } from './GradientFillDuotone';

export interface GradientProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gradient - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GradientRegular } from 'stera-icons/GradientRegular';
 */
const Gradient = memo(forwardRef<SVGSVGElement, GradientProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GradientBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GradientBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GradientFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GradientFill ref={ref} {...rest} />;
  if (duotone) return <GradientRegularDuotone ref={ref} {...rest} />;
  return <GradientRegular ref={ref} {...rest} />;
}));

Gradient.displayName = 'Gradient';

// Triple export pattern (lucide-react style)
export { Gradient, Gradient as GradientIcon, Gradient as SiGradient };
