import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CropRegular } from './CropRegular.js';
import { CropRegularDuotone } from './CropRegularDuotone.js';
import { CropBold } from './CropBold.js';
import { CropBoldDuotone } from './CropBoldDuotone.js';
import { CropFill } from './CropFill.js';
import { CropFillDuotone } from './CropFillDuotone.js';

export interface CropProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Crop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CropRegular } from 'stera-icons/icons/CropRegular';
 */
const Crop = memo(forwardRef<SVGSVGElement, CropProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CropBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CropBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CropFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CropFill ref={ref} {...rest} />;
  if (duotone) return <CropRegularDuotone ref={ref} {...rest} />;
  return <CropRegular ref={ref} {...rest} />;
}));

Crop.displayName = 'Crop';

// Triple export pattern (lucide-react style)
export { Crop, Crop as CropIcon, Crop as SiCrop };
export default Crop;
