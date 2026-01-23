import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HandbagRegular } from './HandbagRegular.js';
import { HandbagRegularDuotone } from './HandbagRegularDuotone.js';
import { HandbagBold } from './HandbagBold.js';
import { HandbagBoldDuotone } from './HandbagBoldDuotone.js';
import { HandbagFill } from './HandbagFill.js';
import { HandbagFillDuotone } from './HandbagFillDuotone.js';

export interface HandbagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Handbag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HandbagRegular } from 'stera-icons/icons/HandbagRegular';
 */
const Handbag = memo(forwardRef<SVGSVGElement, HandbagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandbagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandbagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandbagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandbagFill ref={ref} {...rest} />;
  if (duotone) return <HandbagRegularDuotone ref={ref} {...rest} />;
  return <HandbagRegular ref={ref} {...rest} />;
}));

Handbag.displayName = 'Handbag';

// Triple export pattern (lucide-react style)
export { Handbag, Handbag as HandbagIcon, Handbag as SiHandbag };
export default Handbag;
