import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TrendDownRegular } from './TrendDownRegular.js';
import { TrendDownRegularDuotone } from './TrendDownRegularDuotone.js';
import { TrendDownBold } from './TrendDownBold.js';
import { TrendDownBoldDuotone } from './TrendDownBoldDuotone.js';
import { TrendDownFill } from './TrendDownFill.js';
import { TrendDownFillDuotone } from './TrendDownFillDuotone.js';

export interface TrendDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TrendDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TrendDownRegular } from 'stera-icons/icons/TrendDownRegular';
 */
const TrendDown = memo(forwardRef<SVGSVGElement, TrendDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrendDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TrendDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TrendDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TrendDownFill ref={ref} {...rest} />;
  if (duotone) return <TrendDownRegularDuotone ref={ref} {...rest} />;
  return <TrendDownRegular ref={ref} {...rest} />;
}));

TrendDown.displayName = 'TrendDown';

// Triple export pattern (lucide-react style)
export { TrendDown, TrendDown as TrendDownIcon, TrendDown as SiTrendDown };
export default TrendDown;
