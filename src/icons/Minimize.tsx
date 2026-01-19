import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinimizeRegular } from './MinimizeRegular';
import { MinimizeRegularDuotone } from './MinimizeRegularDuotone';
import { MinimizeBold } from './MinimizeBold';
import { MinimizeBoldDuotone } from './MinimizeBoldDuotone';
import { MinimizeFill } from './MinimizeFill';
import { MinimizeFillDuotone } from './MinimizeFillDuotone';

export interface MinimizeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Minimize - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MinimizeRegular } from 'stera-icons/icons/MinimizeRegular';
 */
const Minimize = memo(forwardRef<SVGSVGElement, MinimizeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinimizeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MinimizeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MinimizeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MinimizeFill ref={ref} {...rest} />;
  if (duotone) return <MinimizeRegularDuotone ref={ref} {...rest} />;
  return <MinimizeRegular ref={ref} {...rest} />;
}));

Minimize.displayName = 'Minimize';

// Triple export pattern (lucide-react style)
export { Minimize, Minimize as MinimizeIcon, Minimize as SiMinimize };
