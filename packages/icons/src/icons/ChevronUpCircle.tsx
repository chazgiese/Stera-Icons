import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronUpCircleRegular } from './ChevronUpCircleRegular.js';
import { ChevronUpCircleRegularDuotone } from './ChevronUpCircleRegularDuotone.js';
import { ChevronUpCircleBold } from './ChevronUpCircleBold.js';
import { ChevronUpCircleBoldDuotone } from './ChevronUpCircleBoldDuotone.js';
import { ChevronUpCircleFill } from './ChevronUpCircleFill.js';
import { ChevronUpCircleFillDuotone } from './ChevronUpCircleFillDuotone.js';

export interface ChevronUpCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronUpCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronUpCircleRegular } from 'stera-icons/icons/ChevronUpCircleRegular';
 */
const ChevronUpCircle = memo(forwardRef<SVGSVGElement, ChevronUpCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronUpCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronUpCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronUpCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronUpCircleFill ref={ref} {...rest} />;
  if (duotone) return <ChevronUpCircleRegularDuotone ref={ref} {...rest} />;
  return <ChevronUpCircleRegular ref={ref} {...rest} />;
}));

ChevronUpCircle.displayName = 'ChevronUpCircle';

// Triple export pattern
export { ChevronUpCircle, ChevronUpCircle as ChevronUpCircleIcon, ChevronUpCircle as SiChevronUpCircle };
export default ChevronUpCircle;
