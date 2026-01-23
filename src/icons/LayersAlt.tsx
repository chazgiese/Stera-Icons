import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayersAltRegular } from './LayersAltRegular.js';
import { LayersAltRegularDuotone } from './LayersAltRegularDuotone.js';
import { LayersAltBold } from './LayersAltBold.js';
import { LayersAltBoldDuotone } from './LayersAltBoldDuotone.js';
import { LayersAltFill } from './LayersAltFill.js';
import { LayersAltFillDuotone } from './LayersAltFillDuotone.js';

export interface LayersAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayersAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayersAltRegular } from 'stera-icons/icons/LayersAltRegular';
 */
const LayersAlt = memo(forwardRef<SVGSVGElement, LayersAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayersAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayersAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayersAltFill ref={ref} {...rest} />;
  if (duotone) return <LayersAltRegularDuotone ref={ref} {...rest} />;
  return <LayersAltRegular ref={ref} {...rest} />;
}));

LayersAlt.displayName = 'LayersAlt';

// Triple export pattern (lucide-react style)
export { LayersAlt, LayersAlt as LayersAltIcon, LayersAlt as SiLayersAlt };
export default LayersAlt;
