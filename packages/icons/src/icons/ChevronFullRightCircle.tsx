import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullRightCircleRegular } from './ChevronFullRightCircleRegular.js';
import { ChevronFullRightCircleRegularDuotone } from './ChevronFullRightCircleRegularDuotone.js';
import { ChevronFullRightCircleBold } from './ChevronFullRightCircleBold.js';
import { ChevronFullRightCircleBoldDuotone } from './ChevronFullRightCircleBoldDuotone.js';
import { ChevronFullRightCircleFill } from './ChevronFullRightCircleFill.js';
import { ChevronFullRightCircleFillDuotone } from './ChevronFullRightCircleFillDuotone.js';

export interface ChevronFullRightCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullRightCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullRightCircleRegular } from 'stera-icons/icons/ChevronFullRightCircleRegular';
 */
const ChevronFullRightCircle = memo(forwardRef<SVGSVGElement, ChevronFullRightCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullRightCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullRightCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullRightCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullRightCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullRightCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullRightCircleRegular ref={ref} {...rest} />;
}));

ChevronFullRightCircle.displayName = 'ChevronFullRightCircle';

// Triple export pattern
export { ChevronFullRightCircle, ChevronFullRightCircle as ChevronFullRightCircleIcon, ChevronFullRightCircle as SiChevronFullRightCircle };
export default ChevronFullRightCircle;
