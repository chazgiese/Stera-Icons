import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeXRegular } from './HomeXRegular';
import { HomeXRegularDuotone } from './HomeXRegularDuotone';
import { HomeXBold } from './HomeXBold';
import { HomeXBoldDuotone } from './HomeXBoldDuotone';
import { HomeXFill } from './HomeXFill';
import { HomeXFillDuotone } from './HomeXFillDuotone';

export interface HomeXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HomeX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HomeXRegular } from 'stera-icons/icons/HomeXRegular';
 */
const HomeX = memo(forwardRef<SVGSVGElement, HomeXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HomeXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HomeXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HomeXFill ref={ref} {...rest} />;
  if (duotone) return <HomeXRegularDuotone ref={ref} {...rest} />;
  return <HomeXRegular ref={ref} {...rest} />;
}));

HomeX.displayName = 'HomeX';

// Triple export pattern (lucide-react style)
export { HomeX, HomeX as HomeXIcon, HomeX as SiHomeX };
export default HomeX;
