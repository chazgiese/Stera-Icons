import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CanRegular } from './CanRegular.js';
import { CanRegularDuotone } from './CanRegularDuotone.js';
import { CanBold } from './CanBold.js';
import { CanBoldDuotone } from './CanBoldDuotone.js';
import { CanFill } from './CanFill.js';
import { CanFillDuotone } from './CanFillDuotone.js';

export interface CanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Can - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CanRegular } from 'stera-icons/icons/CanRegular';
 */
const Can = memo(forwardRef<SVGSVGElement, CanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CanFill ref={ref} {...rest} />;
  if (duotone) return <CanRegularDuotone ref={ref} {...rest} />;
  return <CanRegular ref={ref} {...rest} />;
}));

Can.displayName = 'Can';

// Triple export pattern (lucide-react style)
export { Can, Can as CanIcon, Can as SiCan };
export default Can;
