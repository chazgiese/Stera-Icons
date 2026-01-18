import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock2Regular } from './Clock2Regular';
import { Clock2RegularDuotone } from './Clock2RegularDuotone';
import { Clock2Bold } from './Clock2Bold';
import { Clock2BoldDuotone } from './Clock2BoldDuotone';
import { Clock2Fill } from './Clock2Fill';
import { Clock2FillDuotone } from './Clock2FillDuotone';

export interface Clock2Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock2 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock2Regular } from 'stera-icons/Clock2Regular';
 */
const Clock2 = memo(forwardRef<SVGSVGElement, Clock2Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock2BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock2Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock2FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock2Fill ref={ref} {...rest} />;
  if (duotone) return <Clock2RegularDuotone ref={ref} {...rest} />;
  return <Clock2Regular ref={ref} {...rest} />;
}));

Clock2.displayName = 'Clock2';

// Triple export pattern (lucide-react style)
export { Clock2, Clock2 as Clock2Icon, Clock2 as SiClock2 };
