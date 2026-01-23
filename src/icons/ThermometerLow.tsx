import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ThermometerLowRegular } from './ThermometerLowRegular.js';
import { ThermometerLowRegularDuotone } from './ThermometerLowRegularDuotone.js';
import { ThermometerLowBold } from './ThermometerLowBold.js';
import { ThermometerLowBoldDuotone } from './ThermometerLowBoldDuotone.js';
import { ThermometerLowFill } from './ThermometerLowFill.js';
import { ThermometerLowFillDuotone } from './ThermometerLowFillDuotone.js';

export interface ThermometerLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThermometerLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ThermometerLowRegular } from 'stera-icons/icons/ThermometerLowRegular';
 */
const ThermometerLow = memo(forwardRef<SVGSVGElement, ThermometerLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ThermometerLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ThermometerLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ThermometerLowFill ref={ref} {...rest} />;
  if (duotone) return <ThermometerLowRegularDuotone ref={ref} {...rest} />;
  return <ThermometerLowRegular ref={ref} {...rest} />;
}));

ThermometerLow.displayName = 'ThermometerLow';

// Triple export pattern (lucide-react style)
export { ThermometerLow, ThermometerLow as ThermometerLowIcon, ThermometerLow as SiThermometerLow };
export default ThermometerLow;
