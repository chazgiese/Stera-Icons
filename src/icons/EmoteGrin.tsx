import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteGrinRegular } from './EmoteGrinRegular';
import { EmoteGrinRegularDuotone } from './EmoteGrinRegularDuotone';
import { EmoteGrinBold } from './EmoteGrinBold';
import { EmoteGrinBoldDuotone } from './EmoteGrinBoldDuotone';
import { EmoteGrinFill } from './EmoteGrinFill';
import { EmoteGrinFillDuotone } from './EmoteGrinFillDuotone';

export interface EmoteGrinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteGrin - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteGrinRegular } from 'stera-icons/icons/EmoteGrinRegular';
 */
const EmoteGrin = memo(forwardRef<SVGSVGElement, EmoteGrinProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteGrinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteGrinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteGrinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteGrinFill ref={ref} {...rest} />;
  if (duotone) return <EmoteGrinRegularDuotone ref={ref} {...rest} />;
  return <EmoteGrinRegular ref={ref} {...rest} />;
}));

EmoteGrin.displayName = 'EmoteGrin';

// Triple export pattern (lucide-react style)
export { EmoteGrin, EmoteGrin as EmoteGrinIcon, EmoteGrin as SiEmoteGrin };
