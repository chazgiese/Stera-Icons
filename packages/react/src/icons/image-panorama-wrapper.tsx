import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImagePanoramaIcon as RegularImagePanoramaIcon } from './image-panorama';
import { ImagePanoramaIconDuotone as ImagePanoramaIconDuotone } from './image-panorama-duotone';
import { ImagePanoramaIconBold as ImagePanoramaIconBold } from './image-panorama-bold';
import { ImagePanoramaIconBoldDuotone as ImagePanoramaIconBoldDuotone } from './image-panorama-bold-duotone';
import { ImagePanoramaIconFill as ImagePanoramaIconFill } from './image-panorama-fill';
import { ImagePanoramaIconFillDuotone as ImagePanoramaIconFillDuotone } from './image-panorama-fill-duotone';

export interface ImagePanoramaIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ImagePanoramaIcon = memo(forwardRef<SVGSVGElement, ImagePanoramaIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImagePanoramaIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ImagePanoramaIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ImagePanoramaIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ImagePanoramaIconFill ref={ref} {...props} />;
  if (duotone) return <ImagePanoramaIconDuotone ref={ref} {...props} />;
  return <RegularImagePanoramaIcon ref={ref} {...props} />;
}));

ImagePanoramaIcon.displayName = 'ImagePanoramaIcon';

export { ImagePanoramaIcon };
