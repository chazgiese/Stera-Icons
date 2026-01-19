import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RulerRegular } from './RulerRegular';
import { RulerRegularDuotone } from './RulerRegularDuotone';
import { RulerBold } from './RulerBold';
import { RulerBoldDuotone } from './RulerBoldDuotone';
import { RulerFill } from './RulerFill';
import { RulerFillDuotone } from './RulerFillDuotone';

export interface RulerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Ruler - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RulerRegular } from 'stera-icons/icons/RulerRegular';
 */
const Ruler = memo(forwardRef<SVGSVGElement, RulerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RulerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RulerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RulerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RulerFill ref={ref} {...rest} />;
  if (duotone) return <RulerRegularDuotone ref={ref} {...rest} />;
  return <RulerRegular ref={ref} {...rest} />;
}));

Ruler.displayName = 'Ruler';

// Triple export pattern (lucide-react style)
export { Ruler, Ruler as RulerIcon, Ruler as SiRuler };
export default Ruler;
