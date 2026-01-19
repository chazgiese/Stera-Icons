import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThermometerLowRegular } from './ThermometerLowRegular';
import { ThermometerLowRegularDuotone } from './ThermometerLowRegularDuotone';
import { ThermometerLowBold } from './ThermometerLowBold';
import { ThermometerLowBoldDuotone } from './ThermometerLowBoldDuotone';
import { ThermometerLowFill } from './ThermometerLowFill';
import { ThermometerLowFillDuotone } from './ThermometerLowFillDuotone';

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
