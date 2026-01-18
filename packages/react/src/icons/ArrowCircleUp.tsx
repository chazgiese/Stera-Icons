import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpRegular } from './ArrowCircleUpRegular';
import { ArrowCircleUpRegularDuotone } from './ArrowCircleUpRegularDuotone';
import { ArrowCircleUpBold } from './ArrowCircleUpBold';
import { ArrowCircleUpBoldDuotone } from './ArrowCircleUpBoldDuotone';
import { ArrowCircleUpFill } from './ArrowCircleUpFill';
import { ArrowCircleUpFillDuotone } from './ArrowCircleUpFillDuotone';

export interface ArrowCircleUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleUpRegular } from 'stera-icons/ArrowCircleUpRegular';
 */
const ArrowCircleUp = memo(forwardRef<SVGSVGElement, ArrowCircleUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleUpRegular ref={ref} {...rest} />;
}));

ArrowCircleUp.displayName = 'ArrowCircleUp';

// Triple export pattern (lucide-react style)
export { ArrowCircleUp, ArrowCircleUp as ArrowCircleUpIcon, ArrowCircleUp as SiArrowCircleUp };
