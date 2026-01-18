import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CropRegular } from './CropRegular';
import { CropRegularDuotone } from './CropRegularDuotone';
import { CropBold } from './CropBold';
import { CropBoldDuotone } from './CropBoldDuotone';
import { CropFill } from './CropFill';
import { CropFillDuotone } from './CropFillDuotone';

export interface CropProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Crop with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CropRegular } from 'stera-icons/CropRegular';
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

export { Crop };
