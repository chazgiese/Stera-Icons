import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MatchaRegular } from './MatchaRegular';
import { MatchaRegularDuotone } from './MatchaRegularDuotone';
import { MatchaBold } from './MatchaBold';
import { MatchaBoldDuotone } from './MatchaBoldDuotone';
import { MatchaFill } from './MatchaFill';
import { MatchaFillDuotone } from './MatchaFillDuotone';

export interface MatchaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Matcha - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MatchaRegular } from 'stera-icons/MatchaRegular';
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
