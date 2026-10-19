import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullUpCircleRegular } from './ChevronFullUpCircleRegular.js';
import { ChevronFullUpCircleRegularDuotone } from './ChevronFullUpCircleRegularDuotone.js';
import { ChevronFullUpCircleBold } from './ChevronFullUpCircleBold.js';
import { ChevronFullUpCircleBoldDuotone } from './ChevronFullUpCircleBoldDuotone.js';
import { ChevronFullUpCircleFill } from './ChevronFullUpCircleFill.js';
import { ChevronFullUpCircleFillDuotone } from './ChevronFullUpCircleFillDuotone.js';

export interface ChevronFullUpCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullUpCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullUpCircleRegular } from 'stera-icons/icons/ChevronFullUpCircleRegular';
 */
const ChevronFullUpCircle = memo(forwardRef<SVGSVGElement, ChevronFullUpCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullUpCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullUpCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullUpCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullUpCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullUpCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullUpCircleRegular ref={ref} {...rest} />;
}));

ChevronFullUpCircle.displayName = 'ChevronFullUpCircle';

// Triple export pattern
export { ChevronFullUpCircle, ChevronFullUpCircle as ChevronFullUpCircleIcon, ChevronFullUpCircle as SiChevronFullUpCircle };
export default ChevronFullUpCircle;
