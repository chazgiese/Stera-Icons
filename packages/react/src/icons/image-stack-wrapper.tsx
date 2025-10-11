import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageStackIcon as ImageStackIconRegular } from './image-stack';
import { ImageStackIconBold } from './image-stack-bold';
import { ImageStackIconFilled } from './image-stack-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ImageStackIconRegular ref={ref} {...props} />;
  }
}));

ImageStackIcon.displayName = 'ImageStackIcon';

export { ImageStackIcon };
