import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BarricadeRegular } from './BarricadeRegular.js';
import { BarricadeRegularDuotone } from './BarricadeRegularDuotone.js';
import { BarricadeBold } from './BarricadeBold.js';
import { BarricadeBoldDuotone } from './BarricadeBoldDuotone.js';
import { BarricadeFill } from './BarricadeFill.js';
import { BarricadeFillDuotone } from './BarricadeFillDuotone.js';

export interface BarricadeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Barricade - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BarricadeRegular } from 'stera-icons/icons/BarricadeRegular';
 */
const Barricade = memo(forwardRef<SVGSVGElement, BarricadeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BarricadeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BarricadeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BarricadeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BarricadeFill ref={ref} {...rest} />;
  if (duotone) return <BarricadeRegularDuotone ref={ref} {...rest} />;
  return <BarricadeRegular ref={ref} {...rest} />;
}));

Barricade.displayName = 'Barricade';

// Triple export pattern (lucide-react style)
export { Barricade, Barricade as BarricadeIcon, Barricade as SiBarricade };
export default Barricade;
