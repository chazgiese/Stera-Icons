import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleSlashRegular } from './CircleSlashRegular.js';
import { CircleSlashRegularDuotone } from './CircleSlashRegularDuotone.js';
import { CircleSlashBold } from './CircleSlashBold.js';
import { CircleSlashBoldDuotone } from './CircleSlashBoldDuotone.js';
import { CircleSlashFill } from './CircleSlashFill.js';
import { CircleSlashFillDuotone } from './CircleSlashFillDuotone.js';

export interface CircleSlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleSlash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleSlashRegular } from 'stera-icons/icons/CircleSlashRegular';
 */
const CircleSlash = memo(forwardRef<SVGSVGElement, CircleSlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleSlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleSlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleSlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleSlashFill ref={ref} {...rest} />;
  if (duotone) return <CircleSlashRegularDuotone ref={ref} {...rest} />;
  return <CircleSlashRegular ref={ref} {...rest} />;
}));

CircleSlash.displayName = 'CircleSlash';

// Triple export pattern (lucide-react style)
export { CircleSlash, CircleSlash as CircleSlashIcon, CircleSlash as SiCircleSlash };
export default CircleSlash;
