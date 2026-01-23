import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ImagePileRegular } from './ImagePileRegular.js';
import { ImagePileRegularDuotone } from './ImagePileRegularDuotone.js';
import { ImagePileBold } from './ImagePileBold.js';
import { ImagePileBoldDuotone } from './ImagePileBoldDuotone.js';
import { ImagePileFill } from './ImagePileFill.js';
import { ImagePileFillDuotone } from './ImagePileFillDuotone.js';

export interface ImagePileProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImagePile - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ImagePileRegular } from 'stera-icons/icons/ImagePileRegular';
 */
const ImagePile = memo(forwardRef<SVGSVGElement, ImagePileProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImagePileBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImagePileBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImagePileFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImagePileFill ref={ref} {...rest} />;
  if (duotone) return <ImagePileRegularDuotone ref={ref} {...rest} />;
  return <ImagePileRegular ref={ref} {...rest} />;
}));

ImagePile.displayName = 'ImagePile';

// Triple export pattern (lucide-react style)
export { ImagePile, ImagePile as ImagePileIcon, ImagePile as SiImagePile };
export default ImagePile;
