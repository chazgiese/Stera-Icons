import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ImageSquareRegular } from './ImageSquareRegular.js';
import { ImageSquareRegularDuotone } from './ImageSquareRegularDuotone.js';
import { ImageSquareBold } from './ImageSquareBold.js';
import { ImageSquareBoldDuotone } from './ImageSquareBoldDuotone.js';
import { ImageSquareFill } from './ImageSquareFill.js';
import { ImageSquareFillDuotone } from './ImageSquareFillDuotone.js';

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
