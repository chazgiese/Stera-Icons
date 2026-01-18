import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownRightRegular } from './ArrowCircleDownRightRegular';
import { ArrowCircleDownRightRegularDuotone } from './ArrowCircleDownRightRegularDuotone';
import { ArrowCircleDownRightBold } from './ArrowCircleDownRightBold';
import { ArrowCircleDownRightBoldDuotone } from './ArrowCircleDownRightBoldDuotone';
import { ArrowCircleDownRightFill } from './ArrowCircleDownRightFill';
import { ArrowCircleDownRightFillDuotone } from './ArrowCircleDownRightFillDuotone';

export interface ArrowCircleDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleDownRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleDownRightRegular } from 'stera-icons/ArrowCircleDownRightRegular';
 */
const ArrowCircleDownRight = memo(forwardRef<SVGSVGElement, ArrowCircleDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleDownRightRegular ref={ref} {...rest} />;
}));

ArrowCircleDownRight.displayName = 'ArrowCircleDownRight';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRight, ArrowCircleDownRight as ArrowCircleDownRightIcon, ArrowCircleDownRight as SiArrowCircleDownRight };
