import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpRightDownLeftRegular } from './ArrowUpRightDownLeftRegular.js';
import { ArrowUpRightDownLeftRegularDuotone } from './ArrowUpRightDownLeftRegularDuotone.js';
import { ArrowUpRightDownLeftBold } from './ArrowUpRightDownLeftBold.js';
import { ArrowUpRightDownLeftBoldDuotone } from './ArrowUpRightDownLeftBoldDuotone.js';
import { ArrowUpRightDownLeftFill } from './ArrowUpRightDownLeftFill.js';
import { ArrowUpRightDownLeftFillDuotone } from './ArrowUpRightDownLeftFillDuotone.js';

export interface ArrowUpRightDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpRightDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRightDownLeftRegular } from 'stera-icons/icons/ArrowUpRightDownLeftRegular';
 */
const ArrowUpRightDownLeft = memo(forwardRef<SVGSVGElement, ArrowUpRightDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpRightDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpRightDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRightDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRightDownLeftRegular ref={ref} {...rest} />;
}));

ArrowUpRightDownLeft.displayName = 'ArrowUpRightDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeft, ArrowUpRightDownLeft as ArrowUpRightDownLeftIcon, ArrowUpRightDownLeft as SiArrowUpRightDownLeft };
export default ArrowUpRightDownLeft;
