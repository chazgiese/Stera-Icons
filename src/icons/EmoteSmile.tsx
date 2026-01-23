import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EmoteSmileRegular } from './EmoteSmileRegular.js';
import { EmoteSmileRegularDuotone } from './EmoteSmileRegularDuotone.js';
import { EmoteSmileBold } from './EmoteSmileBold.js';
import { EmoteSmileBoldDuotone } from './EmoteSmileBoldDuotone.js';
import { EmoteSmileFill } from './EmoteSmileFill.js';
import { EmoteSmileFillDuotone } from './EmoteSmileFillDuotone.js';

export interface EmoteSmileProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteSmile - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteSmileRegular } from 'stera-icons/icons/EmoteSmileRegular';
 */
const EmoteSmile = memo(forwardRef<SVGSVGElement, EmoteSmileProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSmileBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteSmileBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteSmileFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteSmileFill ref={ref} {...rest} />;
  if (duotone) return <EmoteSmileRegularDuotone ref={ref} {...rest} />;
  return <EmoteSmileRegular ref={ref} {...rest} />;
}));

EmoteSmile.displayName = 'EmoteSmile';

// Triple export pattern (lucide-react style)
export { EmoteSmile, EmoteSmile as EmoteSmileIcon, EmoteSmile as SiEmoteSmile };
export default EmoteSmile;
