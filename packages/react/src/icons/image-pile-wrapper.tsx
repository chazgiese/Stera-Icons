import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ImagePileIcon as ImagePileIconRegular } from './image-pile';
import { ImagePileIconBold } from './image-pile-bold';
import { ImagePileIconFilled } from './image-pile-filled';
import { ImagePileIconFilltone } from './image-pile-filltone';
import { ImagePileIconLinetone } from './image-pile-linetone';

export interface ImagePileIconProps extends IconProps {
  variant?: IconVariant;
}

const ImagePileIcon = memo(forwardRef<SVGSVGElement, ImagePileIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ImagePileIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ImagePileIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ImagePileIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ImagePileIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ImagePileIconRegular ref={ref} {...props} />;
  }
}));

ImagePileIcon.displayName = 'ImagePileIcon';

export { ImagePileIcon };
