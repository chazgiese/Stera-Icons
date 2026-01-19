import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleNotchRegular } from './CircleNotchRegular';
import { CircleNotchRegularDuotone } from './CircleNotchRegularDuotone';
import { CircleNotchBold } from './CircleNotchBold';
import { CircleNotchBoldDuotone } from './CircleNotchBoldDuotone';
import { CircleNotchFill } from './CircleNotchFill';
import { CircleNotchFillDuotone } from './CircleNotchFillDuotone';

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
