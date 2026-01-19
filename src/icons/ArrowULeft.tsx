import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftRegular } from './ArrowULeftRegular';
import { ArrowULeftRegularDuotone } from './ArrowULeftRegularDuotone';
import { ArrowULeftBold } from './ArrowULeftBold';
import { ArrowULeftBoldDuotone } from './ArrowULeftBoldDuotone';
import { ArrowULeftFill } from './ArrowULeftFill';
import { ArrowULeftFillDuotone } from './ArrowULeftFillDuotone';

export interface ArrowULeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowULeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowULeftRegular } from 'stera-icons/icons/ArrowULeftRegular';
 */
const ArrowULeft = memo(forwardRef<SVGSVGElement, ArrowULeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowULeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowULeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowULeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowULeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowULeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowULeftRegular ref={ref} {...rest} />;
}));

ArrowULeft.displayName = 'ArrowULeft';

// Triple export pattern (lucide-react style)
export { ArrowULeft, ArrowULeft as ArrowULeftIcon, ArrowULeft as SiArrowULeft };
export default ArrowULeft;
