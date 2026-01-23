import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BrightnessHighRegular } from './BrightnessHighRegular.js';
import { BrightnessHighRegularDuotone } from './BrightnessHighRegularDuotone.js';
import { BrightnessHighBold } from './BrightnessHighBold.js';
import { BrightnessHighBoldDuotone } from './BrightnessHighBoldDuotone.js';
import { BrightnessHighFill } from './BrightnessHighFill.js';
import { BrightnessHighFillDuotone } from './BrightnessHighFillDuotone.js';

export interface BrightnessHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrightnessHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrightnessHighRegular } from 'stera-icons/icons/BrightnessHighRegular';
 */
const BrightnessHigh = memo(forwardRef<SVGSVGElement, BrightnessHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrightnessHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrightnessHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrightnessHighFill ref={ref} {...rest} />;
  if (duotone) return <BrightnessHighRegularDuotone ref={ref} {...rest} />;
  return <BrightnessHighRegular ref={ref} {...rest} />;
}));

BrightnessHigh.displayName = 'BrightnessHigh';

// Triple export pattern (lucide-react style)
export { BrightnessHigh, BrightnessHigh as BrightnessHighIcon, BrightnessHigh as SiBrightnessHigh };
export default BrightnessHigh;
