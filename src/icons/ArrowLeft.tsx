import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftRegular } from './ArrowLeftRegular';
import { ArrowLeftRegularDuotone } from './ArrowLeftRegularDuotone';
import { ArrowLeftBold } from './ArrowLeftBold';
import { ArrowLeftBoldDuotone } from './ArrowLeftBoldDuotone';
import { ArrowLeftFill } from './ArrowLeftFill';
import { ArrowLeftFillDuotone } from './ArrowLeftFillDuotone';

export interface ArrowLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLeftRegular } from 'stera-icons/icons/ArrowLeftRegular';
 */
const ArrowLeft = memo(forwardRef<SVGSVGElement, ArrowLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowLeftRegular ref={ref} {...rest} />;
}));

ArrowLeft.displayName = 'ArrowLeft';

// Triple export pattern (lucide-react style)
export { ArrowLeft, ArrowLeft as ArrowLeftIcon, ArrowLeft as SiArrowLeft };
export default ArrowLeft;
