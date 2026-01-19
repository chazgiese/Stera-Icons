import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownLeftRegular } from './ArrowSquareDownLeftRegular';
import { ArrowSquareDownLeftRegularDuotone } from './ArrowSquareDownLeftRegularDuotone';
import { ArrowSquareDownLeftBold } from './ArrowSquareDownLeftBold';
import { ArrowSquareDownLeftBoldDuotone } from './ArrowSquareDownLeftBoldDuotone';
import { ArrowSquareDownLeftFill } from './ArrowSquareDownLeftFill';
import { ArrowSquareDownLeftFillDuotone } from './ArrowSquareDownLeftFillDuotone';

export interface ArrowSquareDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareDownLeftRegular } from 'stera-icons/icons/ArrowSquareDownLeftRegular';
 */
const ArrowSquareDownLeft = memo(forwardRef<SVGSVGElement, ArrowSquareDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareDownLeftRegular ref={ref} {...rest} />;
}));

ArrowSquareDownLeft.displayName = 'ArrowSquareDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownLeft, ArrowSquareDownLeft as ArrowSquareDownLeftIcon, ArrowSquareDownLeft as SiArrowSquareDownLeft };
export default ArrowSquareDownLeft;
