import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalStarRegular } from './MedalStarRegular';
import { MedalStarRegularDuotone } from './MedalStarRegularDuotone';
import { MedalStarBold } from './MedalStarBold';
import { MedalStarBoldDuotone } from './MedalStarBoldDuotone';
import { MedalStarFill } from './MedalStarFill';
import { MedalStarFillDuotone } from './MedalStarFillDuotone';

export interface MedalStarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MedalStar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MedalStarRegular } from 'stera-icons/icons/MedalStarRegular';
 */
const MedalStar = memo(forwardRef<SVGSVGElement, MedalStarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedalStarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MedalStarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MedalStarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MedalStarFill ref={ref} {...rest} />;
  if (duotone) return <MedalStarRegularDuotone ref={ref} {...rest} />;
  return <MedalStarRegular ref={ref} {...rest} />;
}));

MedalStar.displayName = 'MedalStar';

// Triple export pattern (lucide-react style)
export { MedalStar, MedalStar as MedalStarIcon, MedalStar as SiMedalStar };
export default MedalStar;
