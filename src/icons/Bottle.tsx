import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BottleRegular } from './BottleRegular.js';
import { BottleRegularDuotone } from './BottleRegularDuotone.js';
import { BottleBold } from './BottleBold.js';
import { BottleBoldDuotone } from './BottleBoldDuotone.js';
import { BottleFill } from './BottleFill.js';
import { BottleFillDuotone } from './BottleFillDuotone.js';

export interface BottleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bottle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BottleRegular } from 'stera-icons/icons/BottleRegular';
 */
const Bottle = memo(forwardRef<SVGSVGElement, BottleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BottleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BottleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BottleFill ref={ref} {...rest} />;
  if (duotone) return <BottleRegularDuotone ref={ref} {...rest} />;
  return <BottleRegular ref={ref} {...rest} />;
}));

Bottle.displayName = 'Bottle';

// Triple export pattern (lucide-react style)
export { Bottle, Bottle as BottleIcon, Bottle as SiBottle };
export default Bottle;
