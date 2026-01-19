import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareSlashRegular } from './SquareSlashRegular';
import { SquareSlashRegularDuotone } from './SquareSlashRegularDuotone';
import { SquareSlashBold } from './SquareSlashBold';
import { SquareSlashBoldDuotone } from './SquareSlashBoldDuotone';
import { SquareSlashFill } from './SquareSlashFill';
import { SquareSlashFillDuotone } from './SquareSlashFillDuotone';

export interface SquareSlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SquareSlash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SquareSlashRegular } from 'stera-icons/icons/SquareSlashRegular';
 */
const SquareSlash = memo(forwardRef<SVGSVGElement, SquareSlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareSlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquareSlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquareSlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquareSlashFill ref={ref} {...rest} />;
  if (duotone) return <SquareSlashRegularDuotone ref={ref} {...rest} />;
  return <SquareSlashRegular ref={ref} {...rest} />;
}));

SquareSlash.displayName = 'SquareSlash';

// Triple export pattern (lucide-react style)
export { SquareSlash, SquareSlash as SquareSlashIcon, SquareSlash as SiSquareSlash };
export default SquareSlash;
