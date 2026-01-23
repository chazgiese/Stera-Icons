import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ForkKnifeRegular } from './ForkKnifeRegular.js';
import { ForkKnifeRegularDuotone } from './ForkKnifeRegularDuotone.js';
import { ForkKnifeBold } from './ForkKnifeBold.js';
import { ForkKnifeBoldDuotone } from './ForkKnifeBoldDuotone.js';
import { ForkKnifeFill } from './ForkKnifeFill.js';
import { ForkKnifeFillDuotone } from './ForkKnifeFillDuotone.js';

export interface ForkKnifeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ForkKnife - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ForkKnifeRegular } from 'stera-icons/icons/ForkKnifeRegular';
 */
const ForkKnife = memo(forwardRef<SVGSVGElement, ForkKnifeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForkKnifeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ForkKnifeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ForkKnifeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ForkKnifeFill ref={ref} {...rest} />;
  if (duotone) return <ForkKnifeRegularDuotone ref={ref} {...rest} />;
  return <ForkKnifeRegular ref={ref} {...rest} />;
}));

ForkKnife.displayName = 'ForkKnife';

// Triple export pattern (lucide-react style)
export { ForkKnife, ForkKnife as ForkKnifeIcon, ForkKnife as SiForkKnife };
export default ForkKnife;
