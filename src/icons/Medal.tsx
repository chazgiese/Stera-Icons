import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MedalRegular } from './MedalRegular.js';
import { MedalRegularDuotone } from './MedalRegularDuotone.js';
import { MedalBold } from './MedalBold.js';
import { MedalBoldDuotone } from './MedalBoldDuotone.js';
import { MedalFill } from './MedalFill.js';
import { MedalFillDuotone } from './MedalFillDuotone.js';

export interface MedalProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Medal - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MedalRegular } from 'stera-icons/icons/MedalRegular';
 */
const Medal = memo(forwardRef<SVGSVGElement, MedalProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedalBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MedalBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MedalFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MedalFill ref={ref} {...rest} />;
  if (duotone) return <MedalRegularDuotone ref={ref} {...rest} />;
  return <MedalRegular ref={ref} {...rest} />;
}));

Medal.displayName = 'Medal';

// Triple export pattern (lucide-react style)
export { Medal, Medal as MedalIcon, Medal as SiMedal };
export default Medal;
