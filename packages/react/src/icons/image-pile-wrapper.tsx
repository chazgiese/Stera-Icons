import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImagePileIcon as RegularImagePileIcon } from './image-pile';
import { ImagePileIconDuotone as ImagePileIconDuotone } from './image-pile-duotone';
import { ImagePileIconBold as ImagePileIconBold } from './image-pile-bold';
import { ImagePileIconBoldDuotone as ImagePileIconBoldDuotone } from './image-pile-bold-duotone';
import { ImagePileIconFill as ImagePileIconFill } from './image-pile-fill';
import { ImagePileIconFillDuotone as ImagePileIconFillDuotone } from './image-pile-fill-duotone';

export interface ImagePileIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ImagePileIcon = memo(forwardRef<SVGSVGElement, ImagePileIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImagePileIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ImagePileIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ImagePileIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ImagePileIconFill ref={ref} {...props} />;
  if (duotone) return <ImagePileIconDuotone ref={ref} {...props} />;
  return <RegularImagePileIcon ref={ref} {...props} />;
}));

ImagePileIcon.displayName = 'ImagePileIcon';

export { ImagePileIcon };
