import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashCircleRegular } from './HashCircleRegular';
import { HashCircleRegularDuotone } from './HashCircleRegularDuotone';
import { HashCircleBold } from './HashCircleBold';
import { HashCircleBoldDuotone } from './HashCircleBoldDuotone';
import { HashCircleFill } from './HashCircleFill';
import { HashCircleFillDuotone } from './HashCircleFillDuotone';

export interface HashCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HashCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HashCircleRegular } from 'stera-icons/icons/HashCircleRegular';
 */
const HashCircle = memo(forwardRef<SVGSVGElement, HashCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HashCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HashCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HashCircleFill ref={ref} {...rest} />;
  if (duotone) return <HashCircleRegularDuotone ref={ref} {...rest} />;
  return <HashCircleRegular ref={ref} {...rest} />;
}));

HashCircle.displayName = 'HashCircle';

// Triple export pattern (lucide-react style)
export { HashCircle, HashCircle as HashCircleIcon, HashCircle as SiHashCircle };
