import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ImageSquareIcon as ImageSquareIconRegular } from './image-square';
import { ImageSquareIconBold } from './image-square-bold';
import { ImageSquareIconFilled } from './image-square-filled';
import { ImageSquareIconFilltone } from './image-square-filltone';
import { ImageSquareIconLinetone } from './image-square-linetone';

export interface ImageSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const ImageSquareIcon = memo(forwardRef<SVGSVGElement, ImageSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ImageSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ImageSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ImageSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ImageSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ImageSquareIconRegular ref={ref} {...props} />;
  }
}));

ImageSquareIcon.displayName = 'ImageSquareIcon';

export { ImageSquareIcon };
