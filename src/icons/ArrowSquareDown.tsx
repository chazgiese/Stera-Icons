import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownRegular } from './ArrowSquareDownRegular';
import { ArrowSquareDownRegularDuotone } from './ArrowSquareDownRegularDuotone';
import { ArrowSquareDownBold } from './ArrowSquareDownBold';
import { ArrowSquareDownBoldDuotone } from './ArrowSquareDownBoldDuotone';
import { ArrowSquareDownFill } from './ArrowSquareDownFill';
import { ArrowSquareDownFillDuotone } from './ArrowSquareDownFillDuotone';

export interface ArrowSquareDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareDownRegular } from 'stera-icons/icons/ArrowSquareDownRegular';
 */
const ArrowSquareDown = memo(forwardRef<SVGSVGElement, ArrowSquareDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareDownFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareDownRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareDownRegular ref={ref} {...rest} />;
}));

ArrowSquareDown.displayName = 'ArrowSquareDown';

// Triple export pattern (lucide-react style)
export { ArrowSquareDown, ArrowSquareDown as ArrowSquareDownIcon, ArrowSquareDown as SiArrowSquareDown };
