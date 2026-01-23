import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GlobeRegular } from './GlobeRegular.js';
import { GlobeRegularDuotone } from './GlobeRegularDuotone.js';
import { GlobeBold } from './GlobeBold.js';
import { GlobeBoldDuotone } from './GlobeBoldDuotone.js';
import { GlobeFill } from './GlobeFill.js';
import { GlobeFillDuotone } from './GlobeFillDuotone.js';

export interface GlobeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Globe - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GlobeRegular } from 'stera-icons/icons/GlobeRegular';
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
export default Globe;
