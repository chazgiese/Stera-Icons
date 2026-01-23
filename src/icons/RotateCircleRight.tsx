import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RotateCircleRightRegular } from './RotateCircleRightRegular.js';
import { RotateCircleRightRegularDuotone } from './RotateCircleRightRegularDuotone.js';
import { RotateCircleRightBold } from './RotateCircleRightBold.js';
import { RotateCircleRightBoldDuotone } from './RotateCircleRightBoldDuotone.js';
import { RotateCircleRightFill } from './RotateCircleRightFill.js';
import { RotateCircleRightFillDuotone } from './RotateCircleRightFillDuotone.js';

export interface RotateCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateCircleRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotateCircleRightRegular } from 'stera-icons/icons/RotateCircleRightRegular';
 */
const RotateCircleRight = memo(forwardRef<SVGSVGElement, RotateCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <RotateCircleRightRegularDuotone ref={ref} {...rest} />;
  return <RotateCircleRightRegular ref={ref} {...rest} />;
}));

RotateCircleRight.displayName = 'RotateCircleRight';

// Triple export pattern (lucide-react style)
export { RotateCircleRight, RotateCircleRight as RotateCircleRightIcon, RotateCircleRight as SiRotateCircleRight };
export default RotateCircleRight;
