import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideCrossRegular } from './CircleDivideCrossRegular';
import { CircleDivideCrossRegularDuotone } from './CircleDivideCrossRegularDuotone';
import { CircleDivideCrossBold } from './CircleDivideCrossBold';
import { CircleDivideCrossBoldDuotone } from './CircleDivideCrossBoldDuotone';
import { CircleDivideCrossFill } from './CircleDivideCrossFill';
import { CircleDivideCrossFillDuotone } from './CircleDivideCrossFillDuotone';

export interface CircleDivideCrossProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDivideCross - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDivideCrossRegular } from 'stera-icons/CircleDivideCrossRegular';
 */
const CircleDivideCross = memo(forwardRef<SVGSVGElement, CircleDivideCrossProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideCrossBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDivideCrossBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDivideCrossFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDivideCrossFill ref={ref} {...rest} />;
  if (duotone) return <CircleDivideCrossRegularDuotone ref={ref} {...rest} />;
  return <CircleDivideCrossRegular ref={ref} {...rest} />;
}));

CircleDivideCross.displayName = 'CircleDivideCross';

// Triple export pattern (lucide-react style)
export { CircleDivideCross, CircleDivideCross as CircleDivideCrossIcon, CircleDivideCross as SiCircleDivideCross };
