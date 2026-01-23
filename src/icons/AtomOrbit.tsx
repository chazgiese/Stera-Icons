import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AtomOrbitRegular } from './AtomOrbitRegular.js';
import { AtomOrbitRegularDuotone } from './AtomOrbitRegularDuotone.js';
import { AtomOrbitBold } from './AtomOrbitBold.js';
import { AtomOrbitBoldDuotone } from './AtomOrbitBoldDuotone.js';
import { AtomOrbitFill } from './AtomOrbitFill.js';
import { AtomOrbitFillDuotone } from './AtomOrbitFillDuotone.js';

export interface AtomOrbitProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AtomOrbit - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AtomOrbitRegular } from 'stera-icons/icons/AtomOrbitRegular';
 */
const AtomOrbit = memo(forwardRef<SVGSVGElement, AtomOrbitProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomOrbitBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtomOrbitBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtomOrbitFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtomOrbitFill ref={ref} {...rest} />;
  if (duotone) return <AtomOrbitRegularDuotone ref={ref} {...rest} />;
  return <AtomOrbitRegular ref={ref} {...rest} />;
}));

AtomOrbit.displayName = 'AtomOrbit';

// Triple export pattern (lucide-react style)
export { AtomOrbit, AtomOrbit as AtomOrbitIcon, AtomOrbit as SiAtomOrbit };
export default AtomOrbit;
