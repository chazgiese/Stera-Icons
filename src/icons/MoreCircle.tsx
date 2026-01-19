import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleRegular } from './MoreCircleRegular';
import { MoreCircleRegularDuotone } from './MoreCircleRegularDuotone';
import { MoreCircleBold } from './MoreCircleBold';
import { MoreCircleBoldDuotone } from './MoreCircleBoldDuotone';
import { MoreCircleFill } from './MoreCircleFill';
import { MoreCircleFillDuotone } from './MoreCircleFillDuotone';

export interface MoreCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreCircleRegular } from 'stera-icons/icons/MoreCircleRegular';
 */
const MoreCircle = memo(forwardRef<SVGSVGElement, MoreCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreCircleFill ref={ref} {...rest} />;
  if (duotone) return <MoreCircleRegularDuotone ref={ref} {...rest} />;
  return <MoreCircleRegular ref={ref} {...rest} />;
}));

MoreCircle.displayName = 'MoreCircle';

// Triple export pattern (lucide-react style)
export { MoreCircle, MoreCircle as MoreCircleIcon, MoreCircle as SiMoreCircle };
