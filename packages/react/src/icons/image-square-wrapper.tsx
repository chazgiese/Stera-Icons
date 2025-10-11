import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageSquareIcon as ImageSquareIconRegular } from './image-square';
import { ImageSquareIconBold } from './image-square-bold';
import { ImageSquareIconFilled } from './image-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ImageSquareIconRegular ref={ref} {...props} />;
  }
}));

ImageSquareIcon.displayName = 'ImageSquareIcon';

export { ImageSquareIcon };
