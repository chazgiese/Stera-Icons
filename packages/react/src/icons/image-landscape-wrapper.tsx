import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ImageLandscapeIcon as ImageLandscapeIconRegular } from './image-landscape';
import { ImageLandscapeIconBold } from './image-landscape-bold';
import { ImageLandscapeIconFilled } from './image-landscape-filled';
import { ImageLandscapeIconFilltone } from './image-landscape-filltone';
import { ImageLandscapeIconLinetone } from './image-landscape-linetone';

export interface ImageLandscapeIconProps extends IconProps {
  variant?: IconVariant;
}

const ImageLandscapeIcon = memo(forwardRef<SVGSVGElement, ImageLandscapeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ImageLandscapeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ImageLandscapeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ImageLandscapeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ImageLandscapeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ImageLandscapeIconRegular ref={ref} {...props} />;
  }
}));

ImageLandscapeIcon.displayName = 'ImageLandscapeIcon';

export { ImageLandscapeIcon };
