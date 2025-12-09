import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ImagePanoramaIcon as RegularImagePanoramaIcon } from './image-panorama';
import { ImagePanoramaIconBold } from './image-panorama-bold';
import { ImagePanoramaIconFilled } from './image-panorama-filled';
import { ImagePanoramaIconFilltone } from './image-panorama-filltone';
import { ImagePanoramaIconLinetone } from './image-panorama-linetone';

export interface ImagePanoramaIconProps extends IconProps {
  variant?: IconVariant;
}

const ImagePanoramaIcon = memo(forwardRef<SVGSVGElement, ImagePanoramaIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ImagePanoramaIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ImagePanoramaIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ImagePanoramaIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ImagePanoramaIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularImagePanoramaIcon ref={ref} {...props} />;
  }
}));

ImagePanoramaIcon.displayName = 'ImagePanoramaIcon';

export { ImagePanoramaIcon };
