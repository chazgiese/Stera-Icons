import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownLeftRegular } from './ArrowDownLeftRegular.js';
import { ArrowDownLeftRegularDuotone } from './ArrowDownLeftRegularDuotone.js';
import { ArrowDownLeftBold } from './ArrowDownLeftBold.js';
import { ArrowDownLeftBoldDuotone } from './ArrowDownLeftBoldDuotone.js';
import { ArrowDownLeftFill } from './ArrowDownLeftFill.js';
import { ArrowDownLeftFillDuotone } from './ArrowDownLeftFillDuotone.js';

export interface ArrowDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownLeftRegular } from 'stera-icons/icons/ArrowDownLeftRegular';
 */
const ArrowDownLeft = memo(forwardRef<SVGSVGElement, ArrowDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownLeftRegular ref={ref} {...rest} />;
}));

ArrowDownLeft.displayName = 'ArrowDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowDownLeft, ArrowDownLeft as ArrowDownLeftIcon, ArrowDownLeft as SiArrowDownLeft };
export default ArrowDownLeft;
