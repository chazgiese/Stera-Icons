import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleCheckerRegular } from './CircleCheckerRegular.js';
import { CircleCheckerRegularDuotone } from './CircleCheckerRegularDuotone.js';
import { CircleCheckerBold } from './CircleCheckerBold.js';
import { CircleCheckerBoldDuotone } from './CircleCheckerBoldDuotone.js';
import { CircleCheckerFill } from './CircleCheckerFill.js';
import { CircleCheckerFillDuotone } from './CircleCheckerFillDuotone.js';

export interface CircleCheckerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleChecker - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleCheckerRegular } from 'stera-icons/icons/CircleCheckerRegular';
 */
const CircleChecker = memo(forwardRef<SVGSVGElement, CircleCheckerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleCheckerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleCheckerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleCheckerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleCheckerFill ref={ref} {...rest} />;
  if (duotone) return <CircleCheckerRegularDuotone ref={ref} {...rest} />;
  return <CircleCheckerRegular ref={ref} {...rest} />;
}));

CircleChecker.displayName = 'CircleChecker';

// Triple export pattern (lucide-react style)
export { CircleChecker, CircleChecker as CircleCheckerIcon, CircleChecker as SiCircleChecker };
export default CircleChecker;
