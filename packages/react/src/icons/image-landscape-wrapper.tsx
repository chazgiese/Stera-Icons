import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageLandscapeIcon as RegularImageLandscapeIcon } from './image-landscape';
import { ImageLandscapeIconDuotone as ImageLandscapeIconDuotone } from './image-landscape-duotone';
import { ImageLandscapeIconBold as ImageLandscapeIconBold } from './image-landscape-bold';
import { ImageLandscapeIconBoldDuotone as ImageLandscapeIconBoldDuotone } from './image-landscape-bold-duotone';
import { ImageLandscapeIconFill as ImageLandscapeIconFill } from './image-landscape-fill';
import { ImageLandscapeIconFillDuotone as ImageLandscapeIconFillDuotone } from './image-landscape-fill-duotone';

export interface ImageLandscapeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ImageLandscapeIcon = memo(forwardRef<SVGSVGElement, ImageLandscapeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageLandscapeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ImageLandscapeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ImageLandscapeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ImageLandscapeIconFill ref={ref} {...props} />;
  if (duotone) return <ImageLandscapeIconDuotone ref={ref} {...props} />;
  return <RegularImageLandscapeIcon ref={ref} {...props} />;
}));

ImageLandscapeIcon.displayName = 'ImageLandscapeIcon';

export { ImageLandscapeIcon };
