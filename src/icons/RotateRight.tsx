import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RotateRightRegular } from './RotateRightRegular.js';
import { RotateRightRegularDuotone } from './RotateRightRegularDuotone.js';
import { RotateRightBold } from './RotateRightBold.js';
import { RotateRightBoldDuotone } from './RotateRightBoldDuotone.js';
import { RotateRightFill } from './RotateRightFill.js';
import { RotateRightFillDuotone } from './RotateRightFillDuotone.js';

export interface RotateRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotateRightRegular } from 'stera-icons/icons/RotateRightRegular';
 */
const RotateRight = memo(forwardRef<SVGSVGElement, RotateRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateRightFill ref={ref} {...rest} />;
  if (duotone) return <RotateRightRegularDuotone ref={ref} {...rest} />;
  return <RotateRightRegular ref={ref} {...rest} />;
}));

RotateRight.displayName = 'RotateRight';

// Triple export pattern (lucide-react style)
export { RotateRight, RotateRight as RotateRightIcon, RotateRight as SiRotateRight };
export default RotateRight;
