import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FlameRegular } from './FlameRegular.js';
import { FlameRegularDuotone } from './FlameRegularDuotone.js';
import { FlameBold } from './FlameBold.js';
import { FlameBoldDuotone } from './FlameBoldDuotone.js';
import { FlameFill } from './FlameFill.js';
import { FlameFillDuotone } from './FlameFillDuotone.js';

export interface FlameProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flame - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlameRegular } from 'stera-icons/icons/FlameRegular';
 */
const Flame = memo(forwardRef<SVGSVGElement, FlameProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlameBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlameBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlameFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlameFill ref={ref} {...rest} />;
  if (duotone) return <FlameRegularDuotone ref={ref} {...rest} />;
  return <FlameRegular ref={ref} {...rest} />;
}));

Flame.displayName = 'Flame';

// Triple export pattern (lucide-react style)
export { Flame, Flame as FlameIcon, Flame as SiFlame };
export default Flame;
