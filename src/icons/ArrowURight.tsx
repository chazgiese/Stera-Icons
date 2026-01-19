import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightRegular } from './ArrowURightRegular';
import { ArrowURightRegularDuotone } from './ArrowURightRegularDuotone';
import { ArrowURightBold } from './ArrowURightBold';
import { ArrowURightBoldDuotone } from './ArrowURightBoldDuotone';
import { ArrowURightFill } from './ArrowURightFill';
import { ArrowURightFillDuotone } from './ArrowURightFillDuotone';

export interface ArrowURightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowURight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowURightRegular } from 'stera-icons/icons/ArrowURightRegular';
 */
const ArrowURight = memo(forwardRef<SVGSVGElement, ArrowURightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowURightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowURightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowURightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowURightRegularDuotone ref={ref} {...rest} />;
  return <ArrowURightRegular ref={ref} {...rest} />;
}));

ArrowURight.displayName = 'ArrowURight';

// Triple export pattern (lucide-react style)
export { ArrowURight, ArrowURight as ArrowURightIcon, ArrowURight as SiArrowURight };
