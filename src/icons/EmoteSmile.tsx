import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSmileRegular } from './EmoteSmileRegular';
import { EmoteSmileRegularDuotone } from './EmoteSmileRegularDuotone';
import { EmoteSmileBold } from './EmoteSmileBold';
import { EmoteSmileBoldDuotone } from './EmoteSmileBoldDuotone';
import { EmoteSmileFill } from './EmoteSmileFill';
import { EmoteSmileFillDuotone } from './EmoteSmileFillDuotone';

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
