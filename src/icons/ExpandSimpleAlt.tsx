import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ExpandSimpleAltRegular } from './ExpandSimpleAltRegular.js';
import { ExpandSimpleAltRegularDuotone } from './ExpandSimpleAltRegularDuotone.js';
import { ExpandSimpleAltBold } from './ExpandSimpleAltBold.js';
import { ExpandSimpleAltBoldDuotone } from './ExpandSimpleAltBoldDuotone.js';
import { ExpandSimpleAltFill } from './ExpandSimpleAltFill.js';
import { ExpandSimpleAltFillDuotone } from './ExpandSimpleAltFillDuotone.js';

export interface ExpandSimpleAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExpandSimpleAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExpandSimpleAltRegular } from 'stera-icons/icons/ExpandSimpleAltRegular';
 */
const ExpandSimpleAlt = memo(forwardRef<SVGSVGElement, ExpandSimpleAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandSimpleAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExpandSimpleAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExpandSimpleAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExpandSimpleAltFill ref={ref} {...rest} />;
  if (duotone) return <ExpandSimpleAltRegularDuotone ref={ref} {...rest} />;
  return <ExpandSimpleAltRegular ref={ref} {...rest} />;
}));

ExpandSimpleAlt.displayName = 'ExpandSimpleAlt';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAlt, ExpandSimpleAlt as ExpandSimpleAltIcon, ExpandSimpleAlt as SiExpandSimpleAlt };
export default ExpandSimpleAlt;
