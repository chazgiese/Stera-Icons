import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowBigDownRegular } from './ArrowBigDownRegular.js';
import { ArrowBigDownRegularDuotone } from './ArrowBigDownRegularDuotone.js';
import { ArrowBigDownBold } from './ArrowBigDownBold.js';
import { ArrowBigDownBoldDuotone } from './ArrowBigDownBoldDuotone.js';
import { ArrowBigDownFill } from './ArrowBigDownFill.js';
import { ArrowBigDownFillDuotone } from './ArrowBigDownFillDuotone.js';

export interface ArrowBigDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigDownRegular } from 'stera-icons/icons/ArrowBigDownRegular';
 */
const ArrowBigDown = memo(forwardRef<SVGSVGElement, ArrowBigDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigDownRegular ref={ref} {...rest} />;
}));

ArrowBigDown.displayName = 'ArrowBigDown';

// Triple export pattern (lucide-react style)
export { ArrowBigDown, ArrowBigDown as ArrowBigDownIcon, ArrowBigDown as SiArrowBigDown };
export default ArrowBigDown;
