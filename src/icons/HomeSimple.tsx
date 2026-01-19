import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeSimpleRegular } from './HomeSimpleRegular';
import { HomeSimpleRegularDuotone } from './HomeSimpleRegularDuotone';
import { HomeSimpleBold } from './HomeSimpleBold';
import { HomeSimpleBoldDuotone } from './HomeSimpleBoldDuotone';
import { HomeSimpleFill } from './HomeSimpleFill';
import { HomeSimpleFillDuotone } from './HomeSimpleFillDuotone';

export interface HomeSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HomeSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HomeSimpleRegular } from 'stera-icons/icons/HomeSimpleRegular';
 */
const HomeSimple = memo(forwardRef<SVGSVGElement, HomeSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HomeSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HomeSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HomeSimpleFill ref={ref} {...rest} />;
  if (duotone) return <HomeSimpleRegularDuotone ref={ref} {...rest} />;
  return <HomeSimpleRegular ref={ref} {...rest} />;
}));

HomeSimple.displayName = 'HomeSimple';

// Triple export pattern (lucide-react style)
export { HomeSimple, HomeSimple as HomeSimpleIcon, HomeSimple as SiHomeSimple };
export default HomeSimple;
