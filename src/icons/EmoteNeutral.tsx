import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EmoteNeutralRegular } from './EmoteNeutralRegular.js';
import { EmoteNeutralRegularDuotone } from './EmoteNeutralRegularDuotone.js';
import { EmoteNeutralBold } from './EmoteNeutralBold.js';
import { EmoteNeutralBoldDuotone } from './EmoteNeutralBoldDuotone.js';
import { EmoteNeutralFill } from './EmoteNeutralFill.js';
import { EmoteNeutralFillDuotone } from './EmoteNeutralFillDuotone.js';

export interface EmoteNeutralProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteNeutral - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteNeutralRegular } from 'stera-icons/icons/EmoteNeutralRegular';
 */
const EmoteNeutral = memo(forwardRef<SVGSVGElement, EmoteNeutralProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteNeutralBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteNeutralBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteNeutralFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteNeutralFill ref={ref} {...rest} />;
  if (duotone) return <EmoteNeutralRegularDuotone ref={ref} {...rest} />;
  return <EmoteNeutralRegular ref={ref} {...rest} />;
}));

EmoteNeutral.displayName = 'EmoteNeutral';

// Triple export pattern (lucide-react style)
export { EmoteNeutral, EmoteNeutral as EmoteNeutralIcon, EmoteNeutral as SiEmoteNeutral };
export default EmoteNeutral;
