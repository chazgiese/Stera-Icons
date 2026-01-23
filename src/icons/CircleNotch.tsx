import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CircleNotchRegular } from './CircleNotchRegular.js';
import { CircleNotchRegularDuotone } from './CircleNotchRegularDuotone.js';
import { CircleNotchBold } from './CircleNotchBold.js';
import { CircleNotchBoldDuotone } from './CircleNotchBoldDuotone.js';
import { CircleNotchFill } from './CircleNotchFill.js';
import { CircleNotchFillDuotone } from './CircleNotchFillDuotone.js';

export interface CircleNotchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleNotch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleNotchRegular } from 'stera-icons/icons/CircleNotchRegular';
 */
const CircleNotch = memo(forwardRef<SVGSVGElement, CircleNotchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleNotchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleNotchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleNotchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleNotchFill ref={ref} {...rest} />;
  if (duotone) return <CircleNotchRegularDuotone ref={ref} {...rest} />;
  return <CircleNotchRegular ref={ref} {...rest} />;
}));

CircleNotch.displayName = 'CircleNotch';

// Triple export pattern (lucide-react style)
export { CircleNotch, CircleNotch as CircleNotchIcon, CircleNotch as SiCircleNotch };
export default CircleNotch;
