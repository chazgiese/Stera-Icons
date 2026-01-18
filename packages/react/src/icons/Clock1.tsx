import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock1Regular } from './Clock1Regular';
import { Clock1RegularDuotone } from './Clock1RegularDuotone';
import { Clock1Bold } from './Clock1Bold';
import { Clock1BoldDuotone } from './Clock1BoldDuotone';
import { Clock1Fill } from './Clock1Fill';
import { Clock1FillDuotone } from './Clock1FillDuotone';

export interface Clock1Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock1 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock1Regular } from 'stera-icons/Clock1Regular';
 */
const Clock1 = memo(forwardRef<SVGSVGElement, Clock1Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock1BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock1Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock1FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock1Fill ref={ref} {...rest} />;
  if (duotone) return <Clock1RegularDuotone ref={ref} {...rest} />;
  return <Clock1Regular ref={ref} {...rest} />;
}));

Clock1.displayName = 'Clock1';

// Triple export pattern (lucide-react style)
export { Clock1, Clock1 as Clock1Icon, Clock1 as SiClock1 };
