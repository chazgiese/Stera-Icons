import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MinimizeRegular } from './MinimizeRegular.js';
import { MinimizeRegularDuotone } from './MinimizeRegularDuotone.js';
import { MinimizeBold } from './MinimizeBold.js';
import { MinimizeBoldDuotone } from './MinimizeBoldDuotone.js';
import { MinimizeFill } from './MinimizeFill.js';
import { MinimizeFillDuotone } from './MinimizeFillDuotone.js';

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
export default Minimize;
