import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GlobeRegular } from './GlobeRegular';
import { GlobeRegularDuotone } from './GlobeRegularDuotone';
import { GlobeBold } from './GlobeBold';
import { GlobeBoldDuotone } from './GlobeBoldDuotone';
import { GlobeFill } from './GlobeFill';
import { GlobeFillDuotone } from './GlobeFillDuotone';

export interface GlobeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Globe - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GlobeRegular } from 'stera-icons/GlobeRegular';
 */
const Globe = memo(forwardRef<SVGSVGElement, GlobeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GlobeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GlobeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GlobeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GlobeFill ref={ref} {...rest} />;
  if (duotone) return <GlobeRegularDuotone ref={ref} {...rest} />;
  return <GlobeRegular ref={ref} {...rest} />;
}));

Globe.displayName = 'Globe';

// Triple export pattern (lucide-react style)
export { Globe, Globe as GlobeIcon, Globe as SiGlobe };
