import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PilcrowRegular } from './PilcrowRegular.js';
import { PilcrowRegularDuotone } from './PilcrowRegularDuotone.js';
import { PilcrowBold } from './PilcrowBold.js';
import { PilcrowBoldDuotone } from './PilcrowBoldDuotone.js';
import { PilcrowFill } from './PilcrowFill.js';
import { PilcrowFillDuotone } from './PilcrowFillDuotone.js';

export interface PilcrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pilcrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PilcrowRegular } from 'stera-icons/icons/PilcrowRegular';
 */
const Pilcrow = memo(forwardRef<SVGSVGElement, PilcrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PilcrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PilcrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PilcrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PilcrowFill ref={ref} {...rest} />;
  if (duotone) return <PilcrowRegularDuotone ref={ref} {...rest} />;
  return <PilcrowRegular ref={ref} {...rest} />;
}));

Pilcrow.displayName = 'Pilcrow';

// Triple export pattern (lucide-react style)
export { Pilcrow, Pilcrow as PilcrowIcon, Pilcrow as SiPilcrow };
export default Pilcrow;
