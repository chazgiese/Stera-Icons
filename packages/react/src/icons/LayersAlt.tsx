import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersAltRegular } from './LayersAltRegular';
import { LayersAltRegularDuotone } from './LayersAltRegularDuotone';
import { LayersAltBold } from './LayersAltBold';
import { LayersAltBoldDuotone } from './LayersAltBoldDuotone';
import { LayersAltFill } from './LayersAltFill';
import { LayersAltFillDuotone } from './LayersAltFillDuotone';

export interface LayersAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayersAlt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LayersAltRegular } from 'stera-icons/LayersAltRegular';
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

export { LayersAlt };
