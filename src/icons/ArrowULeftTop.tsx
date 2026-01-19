import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftTopRegular } from './ArrowULeftTopRegular';
import { ArrowULeftTopRegularDuotone } from './ArrowULeftTopRegularDuotone';
import { ArrowULeftTopBold } from './ArrowULeftTopBold';
import { ArrowULeftTopBoldDuotone } from './ArrowULeftTopBoldDuotone';
import { ArrowULeftTopFill } from './ArrowULeftTopFill';
import { ArrowULeftTopFillDuotone } from './ArrowULeftTopFillDuotone';

export interface ArrowULeftTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowULeftTop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowULeftTopRegular } from 'stera-icons/icons/ArrowULeftTopRegular';
 */
const ArrowULeftTop = memo(forwardRef<SVGSVGElement, ArrowULeftTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowULeftTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowULeftTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowULeftTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowULeftTopFill ref={ref} {...rest} />;
  if (duotone) return <ArrowULeftTopRegularDuotone ref={ref} {...rest} />;
  return <ArrowULeftTopRegular ref={ref} {...rest} />;
}));

ArrowULeftTop.displayName = 'ArrowULeftTop';

// Triple export pattern (lucide-react style)
export { ArrowULeftTop, ArrowULeftTop as ArrowULeftTopIcon, ArrowULeftTop as SiArrowULeftTop };
export default ArrowULeftTop;
