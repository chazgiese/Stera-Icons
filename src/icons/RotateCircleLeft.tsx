import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RotateCircleLeftRegular } from './RotateCircleLeftRegular.js';
import { RotateCircleLeftRegularDuotone } from './RotateCircleLeftRegularDuotone.js';
import { RotateCircleLeftBold } from './RotateCircleLeftBold.js';
import { RotateCircleLeftBoldDuotone } from './RotateCircleLeftBoldDuotone.js';
import { RotateCircleLeftFill } from './RotateCircleLeftFill.js';
import { RotateCircleLeftFillDuotone } from './RotateCircleLeftFillDuotone.js';

export interface RotateCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateCircleLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotateCircleLeftRegular } from 'stera-icons/icons/RotateCircleLeftRegular';
 */
const RotateCircleLeft = memo(forwardRef<SVGSVGElement, RotateCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <RotateCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <RotateCircleLeftRegular ref={ref} {...rest} />;
}));

RotateCircleLeft.displayName = 'RotateCircleLeft';

// Triple export pattern (lucide-react style)
export { RotateCircleLeft, RotateCircleLeft as RotateCircleLeftIcon, RotateCircleLeft as SiRotateCircleLeft };
export default RotateCircleLeft;
