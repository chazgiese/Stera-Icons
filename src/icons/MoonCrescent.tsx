import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MoonCrescentRegular } from './MoonCrescentRegular.js';
import { MoonCrescentRegularDuotone } from './MoonCrescentRegularDuotone.js';
import { MoonCrescentBold } from './MoonCrescentBold.js';
import { MoonCrescentBoldDuotone } from './MoonCrescentBoldDuotone.js';
import { MoonCrescentFill } from './MoonCrescentFill.js';
import { MoonCrescentFillDuotone } from './MoonCrescentFillDuotone.js';

export interface MoonCrescentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoonCrescent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoonCrescentRegular } from 'stera-icons/icons/MoonCrescentRegular';
 */
const MoonCrescent = memo(forwardRef<SVGSVGElement, MoonCrescentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoonCrescentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoonCrescentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoonCrescentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoonCrescentFill ref={ref} {...rest} />;
  if (duotone) return <MoonCrescentRegularDuotone ref={ref} {...rest} />;
  return <MoonCrescentRegular ref={ref} {...rest} />;
}));

MoonCrescent.displayName = 'MoonCrescent';

// Triple export pattern (lucide-react style)
export { MoonCrescent, MoonCrescent as MoonCrescentIcon, MoonCrescent as SiMoonCrescent };
export default MoonCrescent;
