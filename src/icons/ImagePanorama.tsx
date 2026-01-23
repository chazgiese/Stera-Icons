import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ImagePanoramaRegular } from './ImagePanoramaRegular.js';
import { ImagePanoramaRegularDuotone } from './ImagePanoramaRegularDuotone.js';
import { ImagePanoramaBold } from './ImagePanoramaBold.js';
import { ImagePanoramaBoldDuotone } from './ImagePanoramaBoldDuotone.js';
import { ImagePanoramaFill } from './ImagePanoramaFill.js';
import { ImagePanoramaFillDuotone } from './ImagePanoramaFillDuotone.js';

export interface ImagePanoramaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImagePanorama - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ImagePanoramaRegular } from 'stera-icons/icons/ImagePanoramaRegular';
 */
const ImagePanorama = memo(forwardRef<SVGSVGElement, ImagePanoramaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImagePanoramaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImagePanoramaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImagePanoramaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImagePanoramaFill ref={ref} {...rest} />;
  if (duotone) return <ImagePanoramaRegularDuotone ref={ref} {...rest} />;
  return <ImagePanoramaRegular ref={ref} {...rest} />;
}));

ImagePanorama.displayName = 'ImagePanorama';

// Triple export pattern (lucide-react style)
export { ImagePanorama, ImagePanorama as ImagePanoramaIcon, ImagePanorama as SiImagePanorama };
export default ImagePanorama;
