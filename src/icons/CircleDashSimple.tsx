import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleDashSimpleRegular } from './CircleDashSimpleRegular.js';
import { CircleDashSimpleRegularDuotone } from './CircleDashSimpleRegularDuotone.js';
import { CircleDashSimpleBold } from './CircleDashSimpleBold.js';
import { CircleDashSimpleBoldDuotone } from './CircleDashSimpleBoldDuotone.js';
import { CircleDashSimpleFill } from './CircleDashSimpleFill.js';
import { CircleDashSimpleFillDuotone } from './CircleDashSimpleFillDuotone.js';

export interface CircleDashSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDashSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDashSimpleRegular } from 'stera-icons/icons/CircleDashSimpleRegular';
 */
const CircleDashSimple = memo(forwardRef<SVGSVGElement, CircleDashSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDashSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDashSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDashSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDashSimpleFill ref={ref} {...rest} />;
  if (duotone) return <CircleDashSimpleRegularDuotone ref={ref} {...rest} />;
  return <CircleDashSimpleRegular ref={ref} {...rest} />;
}));

CircleDashSimple.displayName = 'CircleDashSimple';

// Triple export pattern (lucide-react style)
export { CircleDashSimple, CircleDashSimple as CircleDashSimpleIcon, CircleDashSimple as SiCircleDashSimple };
export default CircleDashSimple;
