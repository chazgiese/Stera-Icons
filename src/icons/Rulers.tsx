import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RulersRegular } from './RulersRegular.js';
import { RulersRegularDuotone } from './RulersRegularDuotone.js';
import { RulersBold } from './RulersBold.js';
import { RulersBoldDuotone } from './RulersBoldDuotone.js';
import { RulersFill } from './RulersFill.js';
import { RulersFillDuotone } from './RulersFillDuotone.js';

export interface RulersProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Rulers - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RulersRegular } from 'stera-icons/icons/RulersRegular';
 */
const Rulers = memo(forwardRef<SVGSVGElement, RulersProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RulersBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RulersBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RulersFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RulersFill ref={ref} {...rest} />;
  if (duotone) return <RulersRegularDuotone ref={ref} {...rest} />;
  return <RulersRegular ref={ref} {...rest} />;
}));

Rulers.displayName = 'Rulers';

// Triple export pattern (lucide-react style)
export { Rulers, Rulers as RulersIcon, Rulers as SiRulers };
export default Rulers;
