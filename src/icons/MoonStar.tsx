import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoonStarRegular } from './MoonStarRegular';
import { MoonStarRegularDuotone } from './MoonStarRegularDuotone';
import { MoonStarBold } from './MoonStarBold';
import { MoonStarBoldDuotone } from './MoonStarBoldDuotone';
import { MoonStarFill } from './MoonStarFill';
import { MoonStarFillDuotone } from './MoonStarFillDuotone';

export interface MoonStarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoonStar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoonStarRegular } from 'stera-icons/icons/MoonStarRegular';
 */
const MoonStar = memo(forwardRef<SVGSVGElement, MoonStarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoonStarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoonStarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoonStarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoonStarFill ref={ref} {...rest} />;
  if (duotone) return <MoonStarRegularDuotone ref={ref} {...rest} />;
  return <MoonStarRegular ref={ref} {...rest} />;
}));

MoonStar.displayName = 'MoonStar';

// Triple export pattern (lucide-react style)
export { MoonStar, MoonStar as MoonStarIcon, MoonStar as SiMoonStar };
