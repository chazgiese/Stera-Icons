import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ThermometerHighRegular } from './ThermometerHighRegular.js';
import { ThermometerHighRegularDuotone } from './ThermometerHighRegularDuotone.js';
import { ThermometerHighBold } from './ThermometerHighBold.js';
import { ThermometerHighBoldDuotone } from './ThermometerHighBoldDuotone.js';
import { ThermometerHighFill } from './ThermometerHighFill.js';
import { ThermometerHighFillDuotone } from './ThermometerHighFillDuotone.js';

export interface ThermometerHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThermometerHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ThermometerHighRegular } from 'stera-icons/icons/ThermometerHighRegular';
 */
const ThermometerHigh = memo(forwardRef<SVGSVGElement, ThermometerHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThermometerHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ThermometerHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ThermometerHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ThermometerHighFill ref={ref} {...rest} />;
  if (duotone) return <ThermometerHighRegularDuotone ref={ref} {...rest} />;
  return <ThermometerHighRegular ref={ref} {...rest} />;
}));

ThermometerHigh.displayName = 'ThermometerHigh';

// Triple export pattern (lucide-react style)
export { ThermometerHigh, ThermometerHigh as ThermometerHighIcon, ThermometerHigh as SiThermometerHigh };
export default ThermometerHigh;
