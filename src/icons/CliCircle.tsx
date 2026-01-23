import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CliCircleRegular } from './CliCircleRegular.js';
import { CliCircleRegularDuotone } from './CliCircleRegularDuotone.js';
import { CliCircleBold } from './CliCircleBold.js';
import { CliCircleBoldDuotone } from './CliCircleBoldDuotone.js';
import { CliCircleFill } from './CliCircleFill.js';
import { CliCircleFillDuotone } from './CliCircleFillDuotone.js';

export interface CliCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CliCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CliCircleRegular } from 'stera-icons/icons/CliCircleRegular';
 */
const CliCircle = memo(forwardRef<SVGSVGElement, CliCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CliCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CliCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CliCircleFill ref={ref} {...rest} />;
  if (duotone) return <CliCircleRegularDuotone ref={ref} {...rest} />;
  return <CliCircleRegular ref={ref} {...rest} />;
}));

CliCircle.displayName = 'CliCircle';

// Triple export pattern (lucide-react style)
export { CliCircle, CliCircle as CliCircleIcon, CliCircle as SiCliCircle };
export default CliCircle;
