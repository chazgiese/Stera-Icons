import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageSquareIcon as RegularImageSquareIcon } from './image-square';
import { ImageSquareIconDuotone as ImageSquareIconDuotone } from './image-square-duotone';
import { ImageSquareIconBold as ImageSquareIconBold } from './image-square-bold';
import { ImageSquareIconBoldDuotone as ImageSquareIconBoldDuotone } from './image-square-bold-duotone';
import { ImageSquareIconFill as ImageSquareIconFill } from './image-square-fill';
import { ImageSquareIconFillDuotone as ImageSquareIconFillDuotone } from './image-square-fill-duotone';

export interface ImageSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ImageSquareIcon = memo(forwardRef<SVGSVGElement, ImageSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ImageSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ImageSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ImageSquareIconFill ref={ref} {...props} />;
  if (duotone) return <ImageSquareIconDuotone ref={ref} {...props} />;
  return <RegularImageSquareIcon ref={ref} {...props} />;
}));

ImageSquareIcon.displayName = 'ImageSquareIcon';

export { ImageSquareIcon };
