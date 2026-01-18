import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigDownRegular } from './ArrowBigDownRegular';
import { ArrowBigDownRegularDuotone } from './ArrowBigDownRegularDuotone';
import { ArrowBigDownBold } from './ArrowBigDownBold';
import { ArrowBigDownBoldDuotone } from './ArrowBigDownBoldDuotone';
import { ArrowBigDownFill } from './ArrowBigDownFill';
import { ArrowBigDownFillDuotone } from './ArrowBigDownFillDuotone';

export interface ArrowBigDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigDownRegular } from 'stera-icons/ArrowBigDownRegular';
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
