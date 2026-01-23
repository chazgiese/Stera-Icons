import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RotationRightRegular } from './RotationRightRegular.js';
import { RotationRightRegularDuotone } from './RotationRightRegularDuotone.js';
import { RotationRightBold } from './RotationRightBold.js';
import { RotationRightBoldDuotone } from './RotationRightBoldDuotone.js';
import { RotationRightFill } from './RotationRightFill.js';
import { RotationRightFillDuotone } from './RotationRightFillDuotone.js';

export interface RotationRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotationRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotationRightRegular } from 'stera-icons/icons/RotationRightRegular';
 */
const RotationRight = memo(forwardRef<SVGSVGElement, RotationRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotationRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotationRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotationRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotationRightFill ref={ref} {...rest} />;
  if (duotone) return <RotationRightRegularDuotone ref={ref} {...rest} />;
  return <RotationRightRegular ref={ref} {...rest} />;
}));

RotationRight.displayName = 'RotationRight';

// Triple export pattern (lucide-react style)
export { RotationRight, RotationRight as RotationRightIcon, RotationRight as SiRotationRight };
export default RotationRight;
