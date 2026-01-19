import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersRegular } from './LayersRegular';
import { LayersRegularDuotone } from './LayersRegularDuotone';
import { LayersBold } from './LayersBold';
import { LayersBoldDuotone } from './LayersBoldDuotone';
import { LayersFill } from './LayersFill';
import { LayersFillDuotone } from './LayersFillDuotone';

export interface LayersProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Layers - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayersRegular } from 'stera-icons/icons/LayersRegular';
 */
const Layers = memo(forwardRef<SVGSVGElement, LayersProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayersBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayersFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayersFill ref={ref} {...rest} />;
  if (duotone) return <LayersRegularDuotone ref={ref} {...rest} />;
  return <LayersRegular ref={ref} {...rest} />;
}));

Layers.displayName = 'Layers';

// Triple export pattern (lucide-react style)
export { Layers, Layers as LayersIcon, Layers as SiLayers };
