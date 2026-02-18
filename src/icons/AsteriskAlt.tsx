import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AsteriskAltRegular } from './AsteriskAltRegular.js';
import { AsteriskAltRegularDuotone } from './AsteriskAltRegularDuotone.js';
import { AsteriskAltBold } from './AsteriskAltBold.js';
import { AsteriskAltBoldDuotone } from './AsteriskAltBoldDuotone.js';
import { AsteriskAltFill } from './AsteriskAltFill.js';
import { AsteriskAltFillDuotone } from './AsteriskAltFillDuotone.js';

export interface AsteriskAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AsteriskAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AsteriskAltRegular } from 'stera-icons/icons/AsteriskAltRegular';
 */
const AsteriskAlt = memo(forwardRef<SVGSVGElement, AsteriskAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AsteriskAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AsteriskAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AsteriskAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AsteriskAltFill ref={ref} {...rest} />;
  if (duotone) return <AsteriskAltRegularDuotone ref={ref} {...rest} />;
  return <AsteriskAltRegular ref={ref} {...rest} />;
}));

AsteriskAlt.displayName = 'AsteriskAlt';

// Triple export pattern (lucide-react style)
export { AsteriskAlt, AsteriskAlt as AsteriskAltIcon, AsteriskAlt as SiAsteriskAlt };
export default AsteriskAlt;
