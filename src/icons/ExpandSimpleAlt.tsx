import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandSimpleAltRegular } from './ExpandSimpleAltRegular';
import { ExpandSimpleAltRegularDuotone } from './ExpandSimpleAltRegularDuotone';
import { ExpandSimpleAltBold } from './ExpandSimpleAltBold';
import { ExpandSimpleAltBoldDuotone } from './ExpandSimpleAltBoldDuotone';
import { ExpandSimpleAltFill } from './ExpandSimpleAltFill';
import { ExpandSimpleAltFillDuotone } from './ExpandSimpleAltFillDuotone';

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
