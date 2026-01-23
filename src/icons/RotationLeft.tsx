import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RotationLeftRegular } from './RotationLeftRegular.js';
import { RotationLeftRegularDuotone } from './RotationLeftRegularDuotone.js';
import { RotationLeftBold } from './RotationLeftBold.js';
import { RotationLeftBoldDuotone } from './RotationLeftBoldDuotone.js';
import { RotationLeftFill } from './RotationLeftFill.js';
import { RotationLeftFillDuotone } from './RotationLeftFillDuotone.js';

export interface RotationLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotationLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotationLeftRegular } from 'stera-icons/icons/RotationLeftRegular';
 */
const RotationLeft = memo(forwardRef<SVGSVGElement, RotationLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotationLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotationLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotationLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotationLeftFill ref={ref} {...rest} />;
  if (duotone) return <RotationLeftRegularDuotone ref={ref} {...rest} />;
  return <RotationLeftRegular ref={ref} {...rest} />;
}));

RotationLeft.displayName = 'RotationLeft';

// Triple export pattern (lucide-react style)
export { RotationLeft, RotationLeft as RotationLeftIcon, RotationLeft as SiRotationLeft };
export default RotationLeft;
