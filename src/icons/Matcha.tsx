import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MatchaRegular } from './MatchaRegular.js';
import { MatchaRegularDuotone } from './MatchaRegularDuotone.js';
import { MatchaBold } from './MatchaBold.js';
import { MatchaBoldDuotone } from './MatchaBoldDuotone.js';
import { MatchaFill } from './MatchaFill.js';
import { MatchaFillDuotone } from './MatchaFillDuotone.js';

export interface MatchaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Matcha - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MatchaRegular } from 'stera-icons/icons/MatchaRegular';
 */
const Matcha = memo(forwardRef<SVGSVGElement, MatchaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MatchaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MatchaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MatchaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MatchaFill ref={ref} {...rest} />;
  if (duotone) return <MatchaRegularDuotone ref={ref} {...rest} />;
  return <MatchaRegular ref={ref} {...rest} />;
}));

Matcha.displayName = 'Matcha';

// Triple export pattern (lucide-react style)
export { Matcha, Matcha as MatchaIcon, Matcha as SiMatcha };
export default Matcha;
