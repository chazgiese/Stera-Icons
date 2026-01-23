import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MoreCircleVRegular } from './MoreCircleVRegular.js';
import { MoreCircleVRegularDuotone } from './MoreCircleVRegularDuotone.js';
import { MoreCircleVBold } from './MoreCircleVBold.js';
import { MoreCircleVBoldDuotone } from './MoreCircleVBoldDuotone.js';
import { MoreCircleVFill } from './MoreCircleVFill.js';
import { MoreCircleVFillDuotone } from './MoreCircleVFillDuotone.js';

export interface MoreCircleVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreCircleV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreCircleVRegular } from 'stera-icons/icons/MoreCircleVRegular';
 */
const MoreCircleV = memo(forwardRef<SVGSVGElement, MoreCircleVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreCircleVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreCircleVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreCircleVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreCircleVFill ref={ref} {...rest} />;
  if (duotone) return <MoreCircleVRegularDuotone ref={ref} {...rest} />;
  return <MoreCircleVRegular ref={ref} {...rest} />;
}));

MoreCircleV.displayName = 'MoreCircleV';

// Triple export pattern (lucide-react style)
export { MoreCircleV, MoreCircleV as MoreCircleVIcon, MoreCircleV as SiMoreCircleV };
export default MoreCircleV;
