import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownRightRegular } from './ArrowSquareDownRightRegular';
import { ArrowSquareDownRightRegularDuotone } from './ArrowSquareDownRightRegularDuotone';
import { ArrowSquareDownRightBold } from './ArrowSquareDownRightBold';
import { ArrowSquareDownRightBoldDuotone } from './ArrowSquareDownRightBoldDuotone';
import { ArrowSquareDownRightFill } from './ArrowSquareDownRightFill';
import { ArrowSquareDownRightFillDuotone } from './ArrowSquareDownRightFillDuotone';

export interface ArrowSquareDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareDownRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareDownRightRegular } from 'stera-icons/icons/ArrowSquareDownRightRegular';
 */
const ArrowSquareDownRight = memo(forwardRef<SVGSVGElement, ArrowSquareDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareDownRightRegular ref={ref} {...rest} />;
}));

ArrowSquareDownRight.displayName = 'ArrowSquareDownRight';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownRight, ArrowSquareDownRight as ArrowSquareDownRightIcon, ArrowSquareDownRight as SiArrowSquareDownRight };
