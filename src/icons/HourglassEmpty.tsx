import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HourglassEmptyRegular } from './HourglassEmptyRegular.js';
import { HourglassEmptyRegularDuotone } from './HourglassEmptyRegularDuotone.js';
import { HourglassEmptyBold } from './HourglassEmptyBold.js';
import { HourglassEmptyBoldDuotone } from './HourglassEmptyBoldDuotone.js';
import { HourglassEmptyFill } from './HourglassEmptyFill.js';
import { HourglassEmptyFillDuotone } from './HourglassEmptyFillDuotone.js';

export interface HourglassEmptyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HourglassEmpty - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassEmptyRegular } from 'stera-icons/icons/HourglassEmptyRegular';
 */
const HourglassEmpty = memo(forwardRef<SVGSVGElement, HourglassEmptyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassEmptyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HourglassEmptyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HourglassEmptyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HourglassEmptyFill ref={ref} {...rest} />;
  if (duotone) return <HourglassEmptyRegularDuotone ref={ref} {...rest} />;
  return <HourglassEmptyRegular ref={ref} {...rest} />;
}));

HourglassEmpty.displayName = 'HourglassEmpty';

// Triple export pattern (lucide-react style)
export { HourglassEmpty, HourglassEmpty as HourglassEmptyIcon, HourglassEmpty as SiHourglassEmpty };
export default HourglassEmpty;
