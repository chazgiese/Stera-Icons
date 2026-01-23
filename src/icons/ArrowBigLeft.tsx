import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowBigLeftRegular } from './ArrowBigLeftRegular.js';
import { ArrowBigLeftRegularDuotone } from './ArrowBigLeftRegularDuotone.js';
import { ArrowBigLeftBold } from './ArrowBigLeftBold.js';
import { ArrowBigLeftBoldDuotone } from './ArrowBigLeftBoldDuotone.js';
import { ArrowBigLeftFill } from './ArrowBigLeftFill.js';
import { ArrowBigLeftFillDuotone } from './ArrowBigLeftFillDuotone.js';

export interface ArrowBigLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigLeftRegular } from 'stera-icons/icons/ArrowBigLeftRegular';
 */
const ArrowBigLeft = memo(forwardRef<SVGSVGElement, ArrowBigLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigLeftRegular ref={ref} {...rest} />;
}));

ArrowBigLeft.displayName = 'ArrowBigLeft';

// Triple export pattern (lucide-react style)
export { ArrowBigLeft, ArrowBigLeft as ArrowBigLeftIcon, ArrowBigLeft as SiArrowBigLeft };
export default ArrowBigLeft;
