import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronRightCircleRegular } from './ChevronRightCircleRegular.js';
import { ChevronRightCircleRegularDuotone } from './ChevronRightCircleRegularDuotone.js';
import { ChevronRightCircleBold } from './ChevronRightCircleBold.js';
import { ChevronRightCircleBoldDuotone } from './ChevronRightCircleBoldDuotone.js';
import { ChevronRightCircleFill } from './ChevronRightCircleFill.js';
import { ChevronRightCircleFillDuotone } from './ChevronRightCircleFillDuotone.js';

export interface ChevronRightCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronRightCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronRightCircleRegular } from 'stera-icons/icons/ChevronRightCircleRegular';
 */
const ChevronRightCircle = memo(forwardRef<SVGSVGElement, ChevronRightCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronRightCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronRightCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronRightCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronRightCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronRightCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronRightCircleRegular ref={ref} {...rest} />;
}));

ChevronRightCircle.displayName = 'ChevronRightCircle';

// Triple export pattern
export { ChevronRightCircle, ChevronRightCircle as ChevronRightCircleIcon, ChevronRightCircle as SiChevronRightCircle };
export default ChevronRightCircle;
