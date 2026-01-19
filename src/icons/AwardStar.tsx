import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AwardStarRegular } from './AwardStarRegular';
import { AwardStarRegularDuotone } from './AwardStarRegularDuotone';
import { AwardStarBold } from './AwardStarBold';
import { AwardStarBoldDuotone } from './AwardStarBoldDuotone';
import { AwardStarFill } from './AwardStarFill';
import { AwardStarFillDuotone } from './AwardStarFillDuotone';

export interface AwardStarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AwardStar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AwardStarRegular } from 'stera-icons/icons/AwardStarRegular';
 */
const AwardStar = memo(forwardRef<SVGSVGElement, AwardStarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AwardStarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AwardStarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AwardStarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AwardStarFill ref={ref} {...rest} />;
  if (duotone) return <AwardStarRegularDuotone ref={ref} {...rest} />;
  return <AwardStarRegular ref={ref} {...rest} />;
}));

AwardStar.displayName = 'AwardStar';

// Triple export pattern (lucide-react style)
export { AwardStar, AwardStar as AwardStarIcon, AwardStar as SiAwardStar };
export default AwardStar;
