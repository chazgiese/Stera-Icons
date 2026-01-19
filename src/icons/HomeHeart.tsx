import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeHeartRegular } from './HomeHeartRegular';
import { HomeHeartRegularDuotone } from './HomeHeartRegularDuotone';
import { HomeHeartBold } from './HomeHeartBold';
import { HomeHeartBoldDuotone } from './HomeHeartBoldDuotone';
import { HomeHeartFill } from './HomeHeartFill';
import { HomeHeartFillDuotone } from './HomeHeartFillDuotone';

export interface HomeHeartProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HomeHeart - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HomeHeartRegular } from 'stera-icons/icons/HomeHeartRegular';
 */
const HomeHeart = memo(forwardRef<SVGSVGElement, HomeHeartProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeHeartBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HomeHeartBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HomeHeartFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HomeHeartFill ref={ref} {...rest} />;
  if (duotone) return <HomeHeartRegularDuotone ref={ref} {...rest} />;
  return <HomeHeartRegular ref={ref} {...rest} />;
}));

HomeHeart.displayName = 'HomeHeart';

// Triple export pattern (lucide-react style)
export { HomeHeart, HomeHeart as HomeHeartIcon, HomeHeart as SiHomeHeart };
export default HomeHeart;
