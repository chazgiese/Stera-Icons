import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ImageStackRegular } from './ImageStackRegular.js';
import { ImageStackRegularDuotone } from './ImageStackRegularDuotone.js';
import { ImageStackBold } from './ImageStackBold.js';
import { ImageStackBoldDuotone } from './ImageStackBoldDuotone.js';
import { ImageStackFill } from './ImageStackFill.js';
import { ImageStackFillDuotone } from './ImageStackFillDuotone.js';

export interface ImageStackProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImageStack - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ImageStackRegular } from 'stera-icons/icons/ImageStackRegular';
 */
const ImageStack = memo(forwardRef<SVGSVGElement, ImageStackProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageStackBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImageStackBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImageStackFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImageStackFill ref={ref} {...rest} />;
  if (duotone) return <ImageStackRegularDuotone ref={ref} {...rest} />;
  return <ImageStackRegular ref={ref} {...rest} />;
}));

ImageStack.displayName = 'ImageStack';

// Triple export pattern (lucide-react style)
export { ImageStack, ImageStack as ImageStackIcon, ImageStack as SiImageStack };
export default ImageStack;
