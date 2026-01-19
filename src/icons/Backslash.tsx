import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BackslashRegular } from './BackslashRegular';
import { BackslashRegularDuotone } from './BackslashRegularDuotone';
import { BackslashBold } from './BackslashBold';
import { BackslashBoldDuotone } from './BackslashBoldDuotone';
import { BackslashFill } from './BackslashFill';
import { BackslashFillDuotone } from './BackslashFillDuotone';

export interface BackslashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Backslash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BackslashRegular } from 'stera-icons/icons/BackslashRegular';
 */
const Backslash = memo(forwardRef<SVGSVGElement, BackslashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BackslashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BackslashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BackslashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BackslashFill ref={ref} {...rest} />;
  if (duotone) return <BackslashRegularDuotone ref={ref} {...rest} />;
  return <BackslashRegular ref={ref} {...rest} />;
}));

Backslash.displayName = 'Backslash';

// Triple export pattern (lucide-react style)
export { Backslash, Backslash as BackslashIcon, Backslash as SiBackslash };
