import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageSquareRegular } from './ImageSquareRegular';
import { ImageSquareRegularDuotone } from './ImageSquareRegularDuotone';
import { ImageSquareBold } from './ImageSquareBold';
import { ImageSquareBoldDuotone } from './ImageSquareBoldDuotone';
import { ImageSquareFill } from './ImageSquareFill';
import { ImageSquareFillDuotone } from './ImageSquareFillDuotone';

export interface ImageSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImageSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ImageSquareRegular } from 'stera-icons/icons/ImageSquareRegular';
 */
const ImageSquare = memo(forwardRef<SVGSVGElement, ImageSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImageSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImageSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImageSquareFill ref={ref} {...rest} />;
  if (duotone) return <ImageSquareRegularDuotone ref={ref} {...rest} />;
  return <ImageSquareRegular ref={ref} {...rest} />;
}));

ImageSquare.displayName = 'ImageSquare';

// Triple export pattern (lucide-react style)
export { ImageSquare, ImageSquare as ImageSquareIcon, ImageSquare as SiImageSquare };
export default ImageSquare;
