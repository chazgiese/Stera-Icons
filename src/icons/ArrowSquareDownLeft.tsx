import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowSquareDownLeftRegular } from './ArrowSquareDownLeftRegular.js';
import { ArrowSquareDownLeftRegularDuotone } from './ArrowSquareDownLeftRegularDuotone.js';
import { ArrowSquareDownLeftBold } from './ArrowSquareDownLeftBold.js';
import { ArrowSquareDownLeftBoldDuotone } from './ArrowSquareDownLeftBoldDuotone.js';
import { ArrowSquareDownLeftFill } from './ArrowSquareDownLeftFill.js';
import { ArrowSquareDownLeftFillDuotone } from './ArrowSquareDownLeftFillDuotone.js';

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
