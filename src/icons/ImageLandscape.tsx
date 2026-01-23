import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ImageLandscapeRegular } from './ImageLandscapeRegular.js';
import { ImageLandscapeRegularDuotone } from './ImageLandscapeRegularDuotone.js';
import { ImageLandscapeBold } from './ImageLandscapeBold.js';
import { ImageLandscapeBoldDuotone } from './ImageLandscapeBoldDuotone.js';
import { ImageLandscapeFill } from './ImageLandscapeFill.js';
import { ImageLandscapeFillDuotone } from './ImageLandscapeFillDuotone.js';

export interface ImageLandscapeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImageLandscape - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ImageLandscapeRegular } from 'stera-icons/icons/ImageLandscapeRegular';
 */
const ImageLandscape = memo(forwardRef<SVGSVGElement, ImageLandscapeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageLandscapeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImageLandscapeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImageLandscapeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImageLandscapeFill ref={ref} {...rest} />;
  if (duotone) return <ImageLandscapeRegularDuotone ref={ref} {...rest} />;
  return <ImageLandscapeRegular ref={ref} {...rest} />;
}));

ImageLandscape.displayName = 'ImageLandscape';

// Triple export pattern (lucide-react style)
export { ImageLandscape, ImageLandscape as ImageLandscapeIcon, ImageLandscape as SiImageLandscape };
export default ImageLandscape;
