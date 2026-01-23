import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MoreVRegular } from './MoreVRegular.js';
import { MoreVRegularDuotone } from './MoreVRegularDuotone.js';
import { MoreVBold } from './MoreVBold.js';
import { MoreVBoldDuotone } from './MoreVBoldDuotone.js';
import { MoreVFill } from './MoreVFill.js';
import { MoreVFillDuotone } from './MoreVFillDuotone.js';

export interface MoreVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreVRegular } from 'stera-icons/icons/MoreVRegular';
 */
const MoreV = memo(forwardRef<SVGSVGElement, MoreVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreVFill ref={ref} {...rest} />;
  if (duotone) return <MoreVRegularDuotone ref={ref} {...rest} />;
  return <MoreVRegular ref={ref} {...rest} />;
}));

MoreV.displayName = 'MoreV';

// Triple export pattern (lucide-react style)
export { MoreV, MoreV as MoreVIcon, MoreV as SiMoreV };
export default MoreV;
