import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowBigUpRegular } from './ArrowBigUpRegular.js';
import { ArrowBigUpRegularDuotone } from './ArrowBigUpRegularDuotone.js';
import { ArrowBigUpBold } from './ArrowBigUpBold.js';
import { ArrowBigUpBoldDuotone } from './ArrowBigUpBoldDuotone.js';
import { ArrowBigUpFill } from './ArrowBigUpFill.js';
import { ArrowBigUpFillDuotone } from './ArrowBigUpFillDuotone.js';

export interface ArrowBigUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigUpRegular } from 'stera-icons/icons/ArrowBigUpRegular';
 */
const ArrowBigUp = memo(forwardRef<SVGSVGElement, ArrowBigUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigUpRegular ref={ref} {...rest} />;
}));

ArrowBigUp.displayName = 'ArrowBigUp';

// Triple export pattern (lucide-react style)
export { ArrowBigUp, ArrowBigUp as ArrowBigUpIcon, ArrowBigUp as SiArrowBigUp };
export default ArrowBigUp;
