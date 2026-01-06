import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageStackIcon as RegularImageStackIcon } from './image-stack';
import { ImageStackIconDuotone as ImageStackIconDuotone } from './image-stack-duotone';
import { ImageStackIconBold as ImageStackIconBold } from './image-stack-bold';
import { ImageStackIconBoldDuotone as ImageStackIconBoldDuotone } from './image-stack-bold-duotone';
import { ImageStackIconFill as ImageStackIconFill } from './image-stack-fill';
import { ImageStackIconFillDuotone as ImageStackIconFillDuotone } from './image-stack-fill-duotone';

export interface ImageStackIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ImageStackIcon = memo(forwardRef<SVGSVGElement, ImageStackIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageStackIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ImageStackIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ImageStackIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ImageStackIconFill ref={ref} {...props} />;
  if (duotone) return <ImageStackIconDuotone ref={ref} {...props} />;
  return <RegularImageStackIcon ref={ref} {...props} />;
}));

ImageStackIcon.displayName = 'ImageStackIcon';

export { ImageStackIcon };
