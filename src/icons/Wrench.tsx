import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WrenchRegular } from './WrenchRegular.js';
import { WrenchRegularDuotone } from './WrenchRegularDuotone.js';
import { WrenchBold } from './WrenchBold.js';
import { WrenchBoldDuotone } from './WrenchBoldDuotone.js';
import { WrenchFill } from './WrenchFill.js';
import { WrenchFillDuotone } from './WrenchFillDuotone.js';

export interface WrenchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Wrench - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WrenchRegular } from 'stera-icons/icons/WrenchRegular';
 */
const Wrench = memo(forwardRef<SVGSVGElement, WrenchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WrenchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WrenchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WrenchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WrenchFill ref={ref} {...rest} />;
  if (duotone) return <WrenchRegularDuotone ref={ref} {...rest} />;
  return <WrenchRegular ref={ref} {...rest} />;
}));

Wrench.displayName = 'Wrench';

// Triple export pattern (lucide-react style)
export { Wrench, Wrench as WrenchIcon, Wrench as SiWrench };
export default Wrench;
