import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ImageStackIcon as ImageStackIconRegular } from './image-stack';
import { ImageStackIconBold } from './image-stack-bold';
import { ImageStackIconFilled } from './image-stack-filled';
import { ImageStackIconFilltone } from './image-stack-filltone';
import { ImageStackIconLinetone } from './image-stack-linetone';

export interface ImageStackIconProps extends IconProps {
  variant?: IconVariant;
}

const ImageStackIcon = memo(forwardRef<SVGSVGElement, ImageStackIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ImageStackIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ImageStackIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ImageStackIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ImageStackIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ImageStackIconRegular ref={ref} {...props} />;
  }
}));

ImageStackIcon.displayName = 'ImageStackIcon';

export { ImageStackIcon };
