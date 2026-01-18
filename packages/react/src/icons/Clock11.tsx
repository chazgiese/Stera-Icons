import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock11Regular } from './Clock11Regular';
import { Clock11RegularDuotone } from './Clock11RegularDuotone';
import { Clock11Bold } from './Clock11Bold';
import { Clock11BoldDuotone } from './Clock11BoldDuotone';
import { Clock11Fill } from './Clock11Fill';
import { Clock11FillDuotone } from './Clock11FillDuotone';

export interface Clock11Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock11 with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { Clock11Regular } from 'stera-icons/Clock11Regular';
 */
const Clock11 = memo(forwardRef<SVGSVGElement, Clock11Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock11BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock11Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock11FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock11Fill ref={ref} {...rest} />;
  if (duotone) return <Clock11RegularDuotone ref={ref} {...rest} />;
  return <Clock11Regular ref={ref} {...rest} />;
}));

Clock11.displayName = 'Clock11';

export { Clock11 };
