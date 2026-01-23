import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RouteArrowRegular } from './RouteArrowRegular.js';
import { RouteArrowRegularDuotone } from './RouteArrowRegularDuotone.js';
import { RouteArrowBold } from './RouteArrowBold.js';
import { RouteArrowBoldDuotone } from './RouteArrowBoldDuotone.js';
import { RouteArrowFill } from './RouteArrowFill.js';
import { RouteArrowFillDuotone } from './RouteArrowFillDuotone.js';

export interface RouteArrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RouteArrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RouteArrowRegular } from 'stera-icons/icons/RouteArrowRegular';
 */
const RouteArrow = memo(forwardRef<SVGSVGElement, RouteArrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RouteArrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RouteArrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RouteArrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RouteArrowFill ref={ref} {...rest} />;
  if (duotone) return <RouteArrowRegularDuotone ref={ref} {...rest} />;
  return <RouteArrowRegular ref={ref} {...rest} />;
}));

RouteArrow.displayName = 'RouteArrow';

// Triple export pattern (lucide-react style)
export { RouteArrow, RouteArrow as RouteArrowIcon, RouteArrow as SiRouteArrow };
export default RouteArrow;
