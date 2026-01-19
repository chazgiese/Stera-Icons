import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageStackRegular } from './ImageStackRegular';
import { ImageStackRegularDuotone } from './ImageStackRegularDuotone';
import { ImageStackBold } from './ImageStackBold';
import { ImageStackBoldDuotone } from './ImageStackBoldDuotone';
import { ImageStackFill } from './ImageStackFill';
import { ImageStackFillDuotone } from './ImageStackFillDuotone';

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
