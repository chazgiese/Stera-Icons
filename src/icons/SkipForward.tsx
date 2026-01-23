import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SkipForwardRegular } from './SkipForwardRegular.js';
import { SkipForwardRegularDuotone } from './SkipForwardRegularDuotone.js';
import { SkipForwardBold } from './SkipForwardBold.js';
import { SkipForwardBoldDuotone } from './SkipForwardBoldDuotone.js';
import { SkipForwardFill } from './SkipForwardFill.js';
import { SkipForwardFillDuotone } from './SkipForwardFillDuotone.js';

export interface SkipForwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SkipForward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SkipForwardRegular } from 'stera-icons/icons/SkipForwardRegular';
 */
const SkipForward = memo(forwardRef<SVGSVGElement, SkipForwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SkipForwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SkipForwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SkipForwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SkipForwardFill ref={ref} {...rest} />;
  if (duotone) return <SkipForwardRegularDuotone ref={ref} {...rest} />;
  return <SkipForwardRegular ref={ref} {...rest} />;
}));

SkipForward.displayName = 'SkipForward';

// Triple export pattern (lucide-react style)
export { SkipForward, SkipForward as SkipForwardIcon, SkipForward as SiSkipForward };
export default SkipForward;
