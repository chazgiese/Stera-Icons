import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LotusRegular } from './LotusRegular.js';
import { LotusRegularDuotone } from './LotusRegularDuotone.js';
import { LotusBold } from './LotusBold.js';
import { LotusBoldDuotone } from './LotusBoldDuotone.js';
import { LotusFill } from './LotusFill.js';
import { LotusFillDuotone } from './LotusFillDuotone.js';

export interface LotusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Lotus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LotusRegular } from 'stera-icons/icons/LotusRegular';
 */
const Lotus = memo(forwardRef<SVGSVGElement, LotusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LotusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LotusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LotusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LotusFill ref={ref} {...rest} />;
  if (duotone) return <LotusRegularDuotone ref={ref} {...rest} />;
  return <LotusRegular ref={ref} {...rest} />;
}));

Lotus.displayName = 'Lotus';

// Triple export pattern (lucide-react style)
export { Lotus, Lotus as LotusIcon, Lotus as SiLotus };
export default Lotus;
