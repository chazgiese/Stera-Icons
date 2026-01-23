import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PedestalRegular } from './PedestalRegular.js';
import { PedestalRegularDuotone } from './PedestalRegularDuotone.js';
import { PedestalBold } from './PedestalBold.js';
import { PedestalBoldDuotone } from './PedestalBoldDuotone.js';
import { PedestalFill } from './PedestalFill.js';
import { PedestalFillDuotone } from './PedestalFillDuotone.js';

export interface PedestalProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pedestal - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PedestalRegular } from 'stera-icons/icons/PedestalRegular';
 */
const Pedestal = memo(forwardRef<SVGSVGElement, PedestalProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PedestalBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PedestalBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PedestalFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PedestalFill ref={ref} {...rest} />;
  if (duotone) return <PedestalRegularDuotone ref={ref} {...rest} />;
  return <PedestalRegular ref={ref} {...rest} />;
}));

Pedestal.displayName = 'Pedestal';

// Triple export pattern (lucide-react style)
export { Pedestal, Pedestal as PedestalIcon, Pedestal as SiPedestal };
export default Pedestal;
