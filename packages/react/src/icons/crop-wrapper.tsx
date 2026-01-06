import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CropIcon as RegularCropIcon } from './crop';
import { CropIconDuotone as CropIconDuotone } from './crop-duotone';
import { CropIconBold as CropIconBold } from './crop-bold';
import { CropIconBoldDuotone as CropIconBoldDuotone } from './crop-bold-duotone';
import { CropIconFill as CropIconFill } from './crop-fill';
import { CropIconFillDuotone as CropIconFillDuotone } from './crop-fill-duotone';

export interface CropIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CropIcon = memo(forwardRef<SVGSVGElement, CropIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CropIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CropIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CropIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CropIconFill ref={ref} {...props} />;
  if (duotone) return <CropIconDuotone ref={ref} {...props} />;
  return <RegularCropIcon ref={ref} {...props} />;
}));

CropIcon.displayName = 'CropIcon';

export { CropIcon };
