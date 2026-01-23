import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BrightnessLowRegular } from './BrightnessLowRegular.js';
import { BrightnessLowRegularDuotone } from './BrightnessLowRegularDuotone.js';
import { BrightnessLowBold } from './BrightnessLowBold.js';
import { BrightnessLowBoldDuotone } from './BrightnessLowBoldDuotone.js';
import { BrightnessLowFill } from './BrightnessLowFill.js';
import { BrightnessLowFillDuotone } from './BrightnessLowFillDuotone.js';

export interface BrightnessLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrightnessLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrightnessLowRegular } from 'stera-icons/icons/BrightnessLowRegular';
 */
const BrightnessLow = memo(forwardRef<SVGSVGElement, BrightnessLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrightnessLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrightnessLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrightnessLowFill ref={ref} {...rest} />;
  if (duotone) return <BrightnessLowRegularDuotone ref={ref} {...rest} />;
  return <BrightnessLowRegular ref={ref} {...rest} />;
}));

BrightnessLow.displayName = 'BrightnessLow';

// Triple export pattern (lucide-react style)
export { BrightnessLow, BrightnessLow as BrightnessLowIcon, BrightnessLow as SiBrightnessLow };
export default BrightnessLow;
