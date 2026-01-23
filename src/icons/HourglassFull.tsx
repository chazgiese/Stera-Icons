import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HourglassFullRegular } from './HourglassFullRegular.js';
import { HourglassFullRegularDuotone } from './HourglassFullRegularDuotone.js';
import { HourglassFullBold } from './HourglassFullBold.js';
import { HourglassFullBoldDuotone } from './HourglassFullBoldDuotone.js';
import { HourglassFullFill } from './HourglassFullFill.js';
import { HourglassFullFillDuotone } from './HourglassFullFillDuotone.js';

export interface HourglassFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HourglassFull - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassFullRegular } from 'stera-icons/icons/HourglassFullRegular';
 */
const HourglassFull = memo(forwardRef<SVGSVGElement, HourglassFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HourglassFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HourglassFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HourglassFullFill ref={ref} {...rest} />;
  if (duotone) return <HourglassFullRegularDuotone ref={ref} {...rest} />;
  return <HourglassFullRegular ref={ref} {...rest} />;
}));

HourglassFull.displayName = 'HourglassFull';

// Triple export pattern (lucide-react style)
export { HourglassFull, HourglassFull as HourglassFullIcon, HourglassFull as SiHourglassFull };
export default HourglassFull;
