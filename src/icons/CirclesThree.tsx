import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CirclesThreeRegular } from './CirclesThreeRegular.js';
import { CirclesThreeRegularDuotone } from './CirclesThreeRegularDuotone.js';
import { CirclesThreeBold } from './CirclesThreeBold.js';
import { CirclesThreeBoldDuotone } from './CirclesThreeBoldDuotone.js';
import { CirclesThreeFill } from './CirclesThreeFill.js';
import { CirclesThreeFillDuotone } from './CirclesThreeFillDuotone.js';

export interface CirclesThreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CirclesThree - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CirclesThreeRegular } from 'stera-icons/icons/CirclesThreeRegular';
 */
const CirclesThree = memo(forwardRef<SVGSVGElement, CirclesThreeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CirclesThreeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CirclesThreeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CirclesThreeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CirclesThreeFill ref={ref} {...rest} />;
  if (duotone) return <CirclesThreeRegularDuotone ref={ref} {...rest} />;
  return <CirclesThreeRegular ref={ref} {...rest} />;
}));

CirclesThree.displayName = 'CirclesThree';

// Triple export pattern (lucide-react style)
export { CirclesThree, CirclesThree as CirclesThreeIcon, CirclesThree as SiCirclesThree };
export default CirclesThree;
