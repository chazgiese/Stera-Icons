import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HeartRegular } from './HeartRegular';
import { HeartRegularDuotone } from './HeartRegularDuotone';
import { HeartBold } from './HeartBold';
import { HeartBoldDuotone } from './HeartBoldDuotone';
import { HeartFill } from './HeartFill';
import { HeartFillDuotone } from './HeartFillDuotone';

export interface HeartProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Heart - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HeartRegular } from 'stera-icons/icons/HeartRegular';
 */
const Heart = memo(forwardRef<SVGSVGElement, HeartProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HeartBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HeartBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HeartFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HeartFill ref={ref} {...rest} />;
  if (duotone) return <HeartRegularDuotone ref={ref} {...rest} />;
  return <HeartRegular ref={ref} {...rest} />;
}));

Heart.displayName = 'Heart';

// Triple export pattern (lucide-react style)
export { Heart, Heart as HeartIcon, Heart as SiHeart };
